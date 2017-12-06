import {Point} from "./point.entity";
import {Polygon} from "./polygon.entity";
import {GetRandomArbitrary} from "../services/util.service";
/**
 * Created by Grimbode on 02/12/2017.
 */

export class System {

    public planets: Polygon[];
    public sentinelOrbitDistance: number;
    constructor(
        public point: Point
    ){
        this.planets = [];
        //TODO: Fix these values
        this.sentinelOrbitDistance = GetRandomArbitrary(100, 20);
    }
}