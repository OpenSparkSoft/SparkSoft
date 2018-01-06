import {Point} from "../entities/point.entity";
import {Vertex} from "../entities/vertex.entity";
import {Polygon} from "../entities/polygon.entity";
/**
 * Created by Grimbode on 02/12/2017.
 */

export function GetRandomArbitrary(max: number, min: number = 0, floor: boolean = true) {
    let res = Math.random() * (max - min) + min;
    return floor ? Math.floor(res) : res;
}

export const DistanceBetweenTwoPoints =
    (point1: Point, point2: Point): number =>
        Math.sqrt(Math.pow(point1.x-point2.x, 2)+Math.pow(point1.y-point2.y, 2));

//Could be useless
export function GetVertexFromPolygonAndAngle(polygon: Polygon, angle: number): Vertex {
    return new Vertex(
        (polygon.point.x+polygon.radius)*Math.cos(angle),
        (polygon.point.y+polygon.radius)*Math.sin(angle)
    );
}

export function GetVertexFromRadiusAndAngle(radius: number, angle: number): Vertex {
    return new Vertex(
        (radius)*Math.cos(angle),
        (radius)*Math.sin(angle)
    );
}

export function GetRandomColor(): string {
    return `rgb(${GetRandomArbitrary(256)},${GetRandomArbitrary(256)},${GetRandomArbitrary(256)})`
}

export function GetRandomPlanetColor(): string {
    return `rgb(${GetRandomArbitrary(197, 137)},${GetRandomArbitrary(176, 151)},${GetRandomArbitrary(176, 153)})`
}