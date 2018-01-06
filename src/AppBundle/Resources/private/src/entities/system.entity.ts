import {Point} from "./point.entity";
import {Polygon} from "./polygon.entity";
import {GetRandomArbitrary} from "../services/util.service";
import {Sun} from "./sun.entity";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class System {
    public sun: Sun;
    public planets: Polygon[];
    public sentinelOrbitDistance: number;
    constructor(
        public point: Point
    ){
        this.planets = [];
        this.sun = null;
        //TODO: Fix these values
        this.sentinelOrbitDistance = GetRandomArbitrary(100, 20);
    }
}