import {Vertex} from "./vertex.entity";
import {System} from "./system.entity";
import {Point} from "./point.entity";
import {Orbit} from "./orbit.entity";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class Polygon extends System {

    public angles: number[];
    public orbit: Orbit;

    constructor(
        public point: Point,
        public radius: number,
        public color: string,
        public rotationSpeed: number = 10,
        public rotationDirection: boolean = true
    ){
        super(point);
        this.angles = [];
    }

    public add(angle: number){
        this.angles.push(angle);
    }
}