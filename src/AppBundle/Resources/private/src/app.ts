import {DEFAULT_GAME_CONFIG} from "./config/config";
import {GameService} from "./services/game.service";
export class App {

    private game: GameService;
    private canvasId: string;
    private canvasElement: HTMLCanvasElement;
    private si = -1;
    constructor(canvasId: string){
        this.canvasId = canvasId;
        window.addEventListener("load", this.loadHandler);
        window.addEventListener("resize", this.resize);

    }

    private loadHandler = () => {
        this.canvasElement = <HTMLCanvasElement>document.getElementById(this.canvasId);
        if(!this.canvasElement) return console.warn("No canvas element found.");
        this.resize(()=>{
            this.game = new GameService(this.canvasElement , 3, 3, 1);
        });

    };

    private resize = (callback: any = null) => {
        if(this.si > -1) clearTimeout(this.si);

        //no point in changing size if the user constantly changes the window size.
        this.si = setTimeout(()=>{
            this.canvasElement.width = window.innerWidth;
            this.canvasElement.height = window.innerHeight;
            //TODO: Regenerate all systems?
            if(callback && callback != null){
                callback();
            }
        }, 400);
    };
}