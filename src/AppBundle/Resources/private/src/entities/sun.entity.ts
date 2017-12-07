/**
 * Created by Grimbode on 07/12/2017.
 */

import {Circle} from "./circle.entity";
export class Sun extends Circle{
    constructor(point, radius, public color: CanvasGradient){
        super(point, radius);
    }
}