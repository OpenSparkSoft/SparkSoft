import {Circle} from "./circle.entity";
import {Point} from "./point.entity";
import {Direction} from "../enums/direction.enum";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class Orbit extends Circle{
    constructor(
        point: Point,
        radius: number,
        public angle: number,
        public aDirection: Direction,
        public speed: number
    ){
        super(point, radius);
    }
}