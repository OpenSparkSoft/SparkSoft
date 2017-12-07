import {Polygon} from "../entities/polygon.entity";
import {
    DistanceBetweenTwoPoints, GetRandomArbitrary, GetRandomColor,
    GetVertexFromRadiusAndAngle
} from "./util.service";
import {System} from "../entities/system.entity";
import {Point} from "../entities/point.entity";
import {Orbit} from "../entities/orbit.entity";
import {Circle} from "../entities/circle.entity";
import {Direction} from "../enums/direction.enum";
import {Sun} from "../entities/sun.entity";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class GameService {

    private interval: number;
    private ctx: CanvasRenderingContext2D;
    private systems: System[];

    constructor(
        private canvas: HTMLCanvasElement,
        private initialSystemCount: number = 10,
        private initialPlanetCount: number = 10,
        private inception: number = 0,
        private fps: number = 30,
        private then: number = Date.now()
    ){
        this.interval = 1000/fps;
        this.ctx = this.canvas.getContext("2d");
        this.setup();
    }

    private setup(){
        this.systems = [];
        this.createSystems();

        this.systems.forEach((system: System)=>{
            this.createPlanets(system, GetRandomArbitrary(this.inception+1, 1));
        });
        this.loop();

    }

    private createSystems(){
        let systemCount = GetRandomArbitrary(this.initialSystemCount, 1);
        for(let i = 0; i < systemCount; i++){
            this.createSystem()
        }
    }

    private createSystem(){

        let point = new Point(
            GetRandomArbitrary(this.canvas.offsetWidth),
            GetRandomArbitrary(this.canvas.offsetHeight)
        );
        let radius =GetRandomArbitrary(100, 20);
        let gradient = this.ctx.createRadialGradient(point.x, point.y, GetRandomArbitrary(radius/2), point.x, point.y, radius);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "orange");
        let sun = new Sun(point, radius, gradient);
        console.log(`System point: ${point.x}, ${point.y}`);
        let system =new System(point);
        system.sun = sun;
        this.systems.push(system);
    }

    private createPlanets(system: System, inception: number = 0){
        let planetCount = GetRandomArbitrary(this.initialPlanetCount+1, 0);
        for(let i = 0; i < planetCount; i++){

            let offset = system instanceof Polygon
                ? system.radius + system.radius*0.5
                : system.sun.radius + system.sun.radius*0.5

            let orbitRadiusMin, orbitRadiusMax;
            orbitRadiusMax = orbitRadiusMin
                = system.planets.length > 0
                ? system.planets[system.planets.length-1].orbit.radius + offset
                : offset;

            this.createPlanet(system, GetRandomArbitrary(orbitRadiusMax, orbitRadiusMin));

            if(inception > 0 && system.planets.length > 0){
                this.createPlanets(system.planets[system.planets.length-1], inception-1)
            }
        }
    }

    private createPlanet(system: System, radius: number) {
        let initAngle = GetRandomArbitrary(2*Math.PI);
        let orbit = new Orbit(
            system.point,
            radius,
            initAngle,
            GetRandomArbitrary(2, 0) == 0 ? Direction.ClockWise : Direction.CounterClockwise,
            GetRandomArbitrary(100)/10000
        );

        let point = new Point(
            (orbit.radius)*Math.cos(GetRandomArbitrary(orbit.angle)),
            (orbit.radius)*Math.sin(GetRandomArbitrary(orbit.angle))
        );

        let polygon = new Polygon(
            point,
            GetRandomArbitrary(orbit.radius*.2),
            GetRandomColor(),
            GetRandomArbitrary(0.1, 0, false),
            GetRandomArbitrary(2,0) == 0 ? Direction.ClockWise : Direction.CounterClockwise
        );

        console.log(polygon.color);
        this.populateWithAngles(polygon);

        polygon.orbit = orbit;
        console.log(polygon);
        system.planets.push(polygon);
    }

    private populateWithAngles(planet: Polygon){
        let vertexesNumber  = GetRandomArbitrary(10, 3);
        for(let i = 0, a = 0; i < vertexesNumber; i++, a += Math.PI*2/vertexesNumber){
            planet.add(a);
        }
    }

    private loop = () => {
            requestAnimationFrame(this.loop);
            this.update();
            this.draw();
    };

    private update(){
        this.systems.forEach((system: System)=>{
            this.updateSystemInception(system);
        })
    }

    private updateSystemInception(system: System){
        system.planets.forEach((planet: Polygon)=>{

            //Applying planet rotation
            planet.angles = planet.angles.map(angle => {
                return (planet.rotationDirection*planet.rotationSpeed+angle) % (Math.PI*2)
            });

            planet.orbit.angle = (planet.orbit.angle + (planet.orbit.aDirection*planet.orbit.speed )) % (Math.PI*2);

            planet.point.x = (planet.orbit.radius)*Math.cos(planet.orbit.angle);
            planet.point.y = (planet.orbit.radius)*Math.sin(planet.orbit.angle);

            let distance = DistanceBetweenTwoPoints(planet.point, new Point(0,0));
            if(Math.abs(distance - planet.orbit.radius) > 1){
                console.warn(`
                    Radius different: Calc ${distance} != Origin Radius ${planet.orbit.radius}, \n
                    Planet point: ${planet.point.x}, ${planet.point.y}, \n
                    Planet angle: ${planet.orbit.angle}, \n
                `)
            }

            if(planet.planets.length > 0){
                this.updateSystemInception(planet);
            }
        });
    }

    private draw(){
        let now = Date.now();
        let delta = now - this.then;

        if(delta > this.interval){
            this.then = now - (delta % this.interval);

            //TODO: divide this into regions, for optimization.
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            /*this.systems.forEach((system: System) => {
                system.planets.forEach(this.recursiveClear);
            });*/

            //Draw stuff here.
            this.systems.forEach((system: System)=>{
                this.drawCircle(system.sun);
                this.systemInception(system);
            });
        }
    }

    private recursiveClear = (planet: Polygon) => {
        this.ctx.save();
        this.ctx.translate(planet.orbit.origin.x, planet.orbit.origin.y);
        let diameter = planet.radius*2;
        this.ctx.clearRect(
            Math.floor(planet.point.x-diameter),
            Math.floor(planet.point.y-diameter),
            Math.ceil(diameter*2),
            Math.ceil(diameter*2)
        );

        if(planet.planets.length > 0){
            planet.planets.forEach(this.recursiveClear);
        }
        this.ctx.restore();


    };

    private systemInception(system: System){
        this.ctx.save();
        this.ctx.translate(system.point.x, system.point.y);
        system.planets.forEach((planet: Polygon)=>{
            this.drawOrbit(planet.orbit);
            this.drawPolygon(planet);
            //The planet has moons.
            if(planet.planets.length > 0){
                this.systemInception(planet)
            }

        });
        this.ctx.restore();
    }

    private drawOrbit(orbit: Orbit){
        this.ctx.beginPath();
        this.ctx.arc(0,0, orbit.radius, 0, 2*Math.PI);
        this.ctx.strokeStyle = "#d3d3d3";
        this.ctx.stroke();
    }

    private drawPolygon(polygon: Polygon){
        this.ctx.save();
        this.ctx.translate(polygon.point.x, polygon.point.y);
        this.ctx.beginPath();
        let init = GetVertexFromRadiusAndAngle(polygon.radius, polygon.angles[0]);
        this.ctx.moveTo(init.x, init.y);
        polygon.angles.forEach((angle: number, i: number)=>{
            //Already handled first vertex.
            if(i === 0) return;
            let vertex = GetVertexFromRadiusAndAngle(polygon.radius, angle);
            this.ctx.lineTo(vertex.x, vertex.y)
        });
        this.ctx.closePath();
        this.ctx.fillStyle = polygon.color;
        this.ctx.fill();
        this.ctx.restore();
    }

    private drawCircle(sun: Sun){
        this.ctx.beginPath();
        this.ctx.arc(sun.origin.x, sun.origin.y, sun.radius, 0, 2*Math.PI);
        this.ctx.fillStyle = sun.color;
        this.ctx.fill();
    }
}