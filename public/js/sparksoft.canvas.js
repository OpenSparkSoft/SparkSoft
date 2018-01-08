/**
 * Created by rottenoats on 01/12/2017.
 */

var canvas;
var animation_data;
//Using vanilla JS for fun.

window.addEventListener("load", function(){
    canvas = document.getElementById('animation');
    canvas.style.position = "absolute";
    canvas.offsetLeft = 0;
    canvas.offsetTop = 0;
    canvas.style.zIndex = -1;

    animation_data = document.getElementById('animation_data');
    animation_data.style.position = "absolute";
    animation_data.offsetLeft = 0;
    animation_data.offsetTop = 0;

    resize();
    gameLoop();
});

window.addEventListener("resize", function () {
    resize();
});

window.addEventListener("click", function (e) {
    var x = e.clientX;
    var y = e.clientY;

    var width = canvas.offsetWidth;
    var height = canvas.offsetHeight;

    var ox = random(width);
    var oy = random(height);
    var or = Math.sqrt(Math.pow(ox-x, 2)+Math.pow(oy-y, 2));

    //Real values: x: 1254, y: 218, or: 49, ox 496, oy 349, ax NaN, ay 0.5796590266490838
    var ax = Math.acos(x/(ox + or));
    var ay = Math.asin(y/(oy + or));
    circles.push(generateCircle({
        or: or,
        ox: ox,
        oy: oy,
        ax: ax,
        ay: ay,
        c: 'red'
    }));
});

var si = -1;
var resize = function(){

    if(si > -1) clearTimeout(si);

    //no point in changing size if the user constantly changes the window size.
    si = setTimeout(function(){
        canvas.width = screen.width-1;
        canvas.height = screen.height;
        generateCircles();
    }, 400);
};

//Animation starts here
//General variables for animation
var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

var circles = [];
var colors = ['#007bff', 'black', '#868e96']
var random = function(max){
    return Math.floor((Math.random() *max)+1);
};
var generateCircle = function(obj){
    if(!obj) obj = {};
    return {
        r: obj.r || random(100),
        or: obj.or || random(canvas.offsetWidth/2),
        ox: obj.ox || random(canvas.offsetWidth),
        oy: obj.oy || random(canvas.offsetHeight),
        ax: obj.ax || random(2*Math.PI),
        ay: obj.ay || random(2*Math.PI),
        adx: obj.adx || Date.now() % 2,
        ady: obj.ady || Date.now() % 2,
        s: obj.s || random(100)/10000,
        c: obj.c || colors[random(10)%3]
    }
};

var generateCircles = function(){
    //reseting
    circles = [];
    for(var i = 0; i < 5; i++){
        circles.push(generateCircle())
    }
};

var gameLoop = function () {
    requestAnimationFrame(gameLoop);
    update();
    draw();
};

var update = function(){
    circles.forEach(function(that){
        that.x = (that.ox + that.or)*Math.cos(that.ax);
        that.y = (that.oy + that.or)*Math.sin(that.ay);
        that.ay = (that.ay + (that.ady ? that.s : -that.s)) % (Math.PI*2);
        that.ax = (that.ax + (that.adx ? that.s : -that.s)) % (Math.PI*2);
    });

};

var draw = function(){
    now = Date.now();
    delta = now - then;

    if(delta > interval){
        then = now - (delta % interval);
        canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        circles.forEach(circle);
    }

};

var circle = function(obj){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r, 0, 2*Math.PI);
    ctx.strokeStyle = obj.c;
    ctx.stroke();
    ctx.fillStyle = obj.c;
    ctx.fill();
};
