/**
 * Created by Grimbode on 02/12/2017.
 */

(()=>{

    //All variables here
    let si = -1;

    const DEFAULT_GAME_CONFIG = {
        fps: ()=>30,
        now: ()=>null,
        then: ()=>Date.now(),
        interval: ()=>1000/DEFAULT_GAME_CONFIG.fps(),
        delta: ()=>null
    };

    //polygon setup
    window.addEventListener("load", ()=>{
        //"use strict";

        let canvasElement = document.getElementById("canvas")
        if(!canvasElement) return;
        canvasElement.style.position = "absolute";
        canvasElement.offsetLeft = 0;
        canvasElement.offsetTop = 0;
        canvasElement.style.zIndex = -1;

        resize();

        let game = new Game(canvasElement)

    });

    window.addEventListener("resize", ()=>resize());

    let resize = ()=>{
        //"use strict";
        if(si > -1) clearTimeout(si);

        //no point in changing size if the user constantly changes the window size.
        si = setTimeout(function(){
            canvas.width = screen.width-1;
            canvas.height = screen.height;

            //TODO: Regenerate all polygons

        }, 400);
    };

    class Game {

        constructor(canvasElement, options){
            this.canvas = canvasElement;
            this.ctx = canvasElement.getContext("2d");

            //If options is not set, then set it to nothing.
            if(!options) options = {};

            for(let option in DEFAULT_GAME_CONFIG){
                this[option] = options.hasOwnProperty(option) ? options[option] : DEFAULT_GAME_CONFIG[option];
            }

            this.interval = 1000/fps;
        }

        loop = () => {
            requestAnimationFrame(this.loop);
            this.update();
            this.draw();
        };

        update(){}

        draw(){
            this.ctx.rect(10, 10, 10, 10);
        }

        random = (max) => Math.floor((Math.random() *max)+1);
    }

    class Polygon {
        constructor(){}
    }

})();