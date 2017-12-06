import {Circle} from "./circle.entity";
import {Point} from "./point.entity";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class Orbit extends Circle{
    constructor(
        point: Point,
        radius: number,
        public angle: number,
        public aDirection: boolean,
        public speed: number
    ){
        super(point, radius);
    }
}