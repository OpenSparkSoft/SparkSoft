import {Point} from "./point.entity";
export abstract class Circle {
    constructor(
        public origin: Point,
        public radius: number
    ){}
}