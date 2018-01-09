var SparkSoft =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var util_service_1 = __webpack_require__(1);
/**
 * Created by Grimbode on 02/12/2017.
 */
var System = /** @class */ (function () {
    function System(point) {
        this.point = point;
        this.planets = [];
        this.sun = null;
        //TODO: Fix these values
        this.sentinelOrbitDistance = util_service_1.GetRandomArbitrary(100, 20);
    }
    return System;
}());
exports.System = System;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var vertex_entity_1 = __webpack_require__(9);
/**
 * Created by Grimbode on 02/12/2017.
 */
function GetRandomArbitrary(max, min, floor) {
    if (min === void 0) { min = 0; }
    if (floor === void 0) { floor = true; }
    var res = Math.random() * (max - min) + min;
    return floor ? Math.floor(res) : res;
}
exports.GetRandomArbitrary = GetRandomArbitrary;
exports.DistanceBetweenTwoPoints = function (point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
};
//Could be useless
function GetVertexFromPolygonAndAngle(polygon, angle) {
    return new vertex_entity_1.Vertex((polygon.point.x + polygon.radius) * Math.cos(angle), (polygon.point.y + polygon.radius) * Math.sin(angle));
}
exports.GetVertexFromPolygonAndAngle = GetVertexFromPolygonAndAngle;
function GetVertexFromRadiusAndAngle(radius, angle) {
    return new vertex_entity_1.Vertex((radius) * Math.cos(angle), (radius) * Math.sin(angle));
}
exports.GetVertexFromRadiusAndAngle = GetVertexFromRadiusAndAngle;
function GetRandomColor() {
    return "rgb(" + GetRandomArbitrary(256) + "," + GetRandomArbitrary(256) + "," + GetRandomArbitrary(256) + ")";
}
exports.GetRandomColor = GetRandomColor;
function GetRandomPlanetColor() {
    return "rgb(" + GetRandomArbitrary(197, 137) + "," + GetRandomArbitrary(176, 151) + "," + GetRandomArbitrary(176, 153) + ")";
}
exports.GetRandomPlanetColor = GetRandomPlanetColor;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Grimbode on 02/12/2017.
 */
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Grimbode on 07/12/2017.
 */
exports.__esModule = true;
var Direction;
(function (Direction) {
    Direction[Direction["ClockWise"] = 1] = "ClockWise";
    Direction[Direction["CounterClockwise"] = -1] = "CounterClockwise";
})(Direction = exports.Direction || (exports.Direction = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(origin, radius) {
        this.origin = origin;
        this.radius = radius;
    }
    return Circle;
}());
exports.Circle = Circle;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Created by Grimbode on 21/11/2017.
 */
var app_1 = __webpack_require__(6);
var module;
/**
 * Created by kfaulhaber on 30/06/2017.
 */
/**
 * Binding library to exports
 * @type {App}
 */
module.exports = app_1.App;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var game_service_1 = __webpack_require__(7);
var App = /** @class */ (function () {
    function App(canvasId) {
        var _this = this;
        this.si = -1;
        this.loadHandler = function () {
            _this.canvasElement = document.getElementById(_this.canvasId);
            if (!_this.canvasElement)
                return console.warn("No canvas element found.");
            _this.resize(function () {
                _this.game = new game_service_1.GameService(_this.canvasElement);
            });
        };
        this.resize = function (callback) {
            if (callback === void 0) { callback = null; }
            if (_this.si > -1)
                clearTimeout(_this.si);
            //no point in changing size if the user constantly changes the window size.
            _this.si = setTimeout(function () {
                _this.canvasElement.width = document.body.clientWidth;
                _this.canvasElement.height = document.body.clientHeight;
                //TODO: Regenerate all systems?
                if (callback && callback != null) {
                    callback();
                }
            }, 400);
        };
        this.canvasId = canvasId;
        window.addEventListener("load", this.loadHandler);
        window.addEventListener("resize", this.resize);
    }
    return App;
}());
exports.App = App;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var polygon_entity_1 = __webpack_require__(8);
var util_service_1 = __webpack_require__(1);
var system_entity_1 = __webpack_require__(0);
var point_entity_1 = __webpack_require__(2);
var orbit_entity_1 = __webpack_require__(10);
var direction_enum_1 = __webpack_require__(3);
var sun_entity_1 = __webpack_require__(11);
/**
 * Created by Grimbode on 02/12/2017.
 */
var GameService = /** @class */ (function () {
    function GameService(canvas, initialPlanetCount, inception, fps, then) {
        if (initialPlanetCount === void 0) { initialPlanetCount = 3; }
        if (inception === void 0) { inception = 3; }
        if (fps === void 0) { fps = 30; }
        if (then === void 0) { then = Date.now(); }
        var _this = this;
        this.canvas = canvas;
        this.initialPlanetCount = initialPlanetCount;
        this.inception = inception;
        this.fps = fps;
        this.then = then;
        this.loop = function () {
            requestAnimationFrame(_this.loop);
            _this.update();
            _this.draw();
        };
        this.recursiveClear = function (planet) {
            _this.ctx.save();
            _this.ctx.translate(planet.orbit.origin.x, planet.orbit.origin.y);
            var diameter = planet.radius * 2;
            _this.ctx.clearRect(Math.floor(planet.point.x - diameter), Math.floor(planet.point.y - diameter), Math.ceil(diameter * 2), Math.ceil(diameter * 2));
            if (planet.planets.length > 0) {
                planet.planets.forEach(_this.recursiveClear);
            }
            _this.ctx.restore();
        };
        this.interval = 1000 / fps;
        this.ctx = this.canvas.getContext("2d");
        this.setup();
    }
    GameService.prototype.setup = function () {
        var _this = this;
        this.systems = [];
        this.createSystems();
        this.systems.forEach(function (system) {
            _this.createPlanets(system, util_service_1.GetRandomArbitrary(_this.inception, 1));
        });
        this.loop();
    };
    GameService.prototype.createSystems = function () {
        var point1 = new point_entity_1.Point(util_service_1.GetRandomArbitrary(this.canvas.width * 0.25), util_service_1.GetRandomArbitrary(this.canvas.height * 0.25));
        var point2 = new point_entity_1.Point(util_service_1.GetRandomArbitrary(this.canvas.width, this.canvas.width * 0.75), util_service_1.GetRandomArbitrary(this.canvas.height * 0.75, this.canvas.height * 0.25));
        var point3 = new point_entity_1.Point(util_service_1.GetRandomArbitrary(this.canvas.width * 0.25), util_service_1.GetRandomArbitrary(this.canvas.height * 0.85, this.canvas.height * 0.65));
        this.createSystem(point1);
        this.createSystem(point2);
        this.createSystem(point3);
    };
    GameService.prototype.createSystem = function (point) {
        var radius = util_service_1.GetRandomArbitrary(this.canvas.width * 0.10, this.canvas.width * 0.05);
        var gradient = this.ctx.createRadialGradient(point.x, point.y, util_service_1.GetRandomArbitrary(radius / 2), point.x, point.y, radius);
        gradient.addColorStop(0, "#c5b099");
        gradient.addColorStop(1, "#8997aa");
        var sun = new sun_entity_1.Sun(point, radius, gradient);
        console.log("System point: " + point.x + ", " + point.y);
        var system = new system_entity_1.System(point);
        system.sun = sun;
        this.systems.push(system);
    };
    GameService.prototype.createPlanets = function (system, inception) {
        if (inception === void 0) { inception = 0; }
        var planetCount = util_service_1.GetRandomArbitrary(this.initialPlanetCount + 1, 1);
        for (var i = 0; i < planetCount; i++) {
            var orbitRadiusMin = void 0, orbitRadiusMax = void 0;
            orbitRadiusMax = orbitRadiusMin
                = system.planets.length > 0
                    ? system.planets[system.planets.length - 1].orbit.radius + system.planets[system.planets.length - 1].orbit.radius * 0.3
                    : system instanceof polygon_entity_1.Polygon
                        ? system.radius + system.radius * 0.3
                        : system.sun.radius + system.sun.radius * 0.3;
            var radius = util_service_1.GetRandomArbitrary(orbitRadiusMax, orbitRadiusMin);
            if (radius < 5)
                radius = 5;
            this.createPlanet(system, radius);
            if (inception > 0 && system.planets.length > 0) {
                this.createPlanets(system.planets[system.planets.length - 1], inception - 1);
            }
        }
    };
    GameService.prototype.createPlanet = function (system, radius) {
        //no point if the orbits are too close.
        if (system.planets.length > 0 && Math.abs(radius - system.planets[system.planets.length - 1].orbit.radius) < 5)
            return;
        var initAngle = util_service_1.GetRandomArbitrary(2 * Math.PI);
        var orbit = new orbit_entity_1.Orbit(system.point, radius, initAngle, util_service_1.GetRandomArbitrary(2, 0) == 0 ? direction_enum_1.Direction.ClockWise : direction_enum_1.Direction.CounterClockwise, util_service_1.GetRandomArbitrary(100) / 10000);
        var point = new point_entity_1.Point((orbit.radius) * Math.cos(util_service_1.GetRandomArbitrary(orbit.angle)), (orbit.radius) * Math.sin(util_service_1.GetRandomArbitrary(orbit.angle)));
        var polygon = new polygon_entity_1.Polygon(point, util_service_1.GetRandomArbitrary(orbit.radius * .2), util_service_1.GetRandomPlanetColor(), util_service_1.GetRandomArbitrary(0.1, 0, false), util_service_1.GetRandomArbitrary(2, 0) == 0 ? direction_enum_1.Direction.ClockWise : direction_enum_1.Direction.CounterClockwise);
        this.populateWithAngles(polygon);
        polygon.orbit = orbit;
        system.planets.push(polygon);
    };
    GameService.prototype.populateWithAngles = function (planet) {
        var vertexesNumber = util_service_1.GetRandomArbitrary(10, 3);
        for (var i = 0, a = 0; i < vertexesNumber; i++, a += Math.PI * 2 / vertexesNumber) {
            planet.add(a);
        }
    };
    GameService.prototype.update = function () {
        var _this = this;
        this.systems.forEach(function (system) {
            _this.updateSystemInception(system);
        });
    };
    GameService.prototype.updateSystemInception = function (system) {
        var _this = this;
        system.planets.forEach(function (planet) {
            //Applying planet rotation
            planet.angles = planet.angles.map(function (angle) {
                return (planet.rotationDirection * planet.rotationSpeed + angle) % (Math.PI * 2);
            });
            planet.orbit.angle = (planet.orbit.angle + (planet.orbit.aDirection * planet.orbit.speed)) % (Math.PI * 2);
            planet.point.x = (planet.orbit.radius) * Math.cos(planet.orbit.angle);
            planet.point.y = (planet.orbit.radius) * Math.sin(planet.orbit.angle);
            var distance = util_service_1.DistanceBetweenTwoPoints(planet.point, new point_entity_1.Point(0, 0));
            if (Math.abs(distance - planet.orbit.radius) > 1) {
                console.warn("\n                    Radius different: Calc " + distance + " != Origin Radius " + planet.orbit.radius + ", \n\n                    Planet point: " + planet.point.x + ", " + planet.point.y + ", \n\n                    Planet angle: " + planet.orbit.angle + ", \n\n                ");
            }
            if (planet.planets.length > 0) {
                _this.updateSystemInception(planet);
            }
        });
    };
    GameService.prototype.draw = function () {
        var _this = this;
        var now = Date.now();
        var delta = now - this.then;
        if (delta > this.interval) {
            this.then = now - (delta % this.interval);
            //TODO: divide this into regions, for optimization.
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            /*this.systems.forEach((system: System) => {
                system.planets.forEach(this.recursiveClear);
            });*/
            //Draw stuff here.
            this.systems.forEach(function (system) {
                _this.drawCircle(system.sun);
                _this.systemInception(system);
            });
        }
    };
    GameService.prototype.systemInception = function (system) {
        var _this = this;
        this.ctx.save();
        this.ctx.translate(system.point.x, system.point.y);
        system.planets.forEach(function (planet) {
            _this.drawOrbit(planet.orbit);
            _this.drawPolygon(planet);
            //The planet has moons.
            if (planet.planets.length > 0) {
                _this.systemInception(planet);
            }
        });
        this.ctx.restore();
    };
    GameService.prototype.drawOrbit = function (orbit) {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, orbit.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "#d3d3d3";
        this.ctx.stroke();
    };
    GameService.prototype.drawPolygon = function (polygon) {
        var _this = this;
        this.ctx.save();
        this.ctx.translate(polygon.point.x, polygon.point.y);
        this.ctx.beginPath();
        var init = util_service_1.GetVertexFromRadiusAndAngle(polygon.radius, polygon.angles[0]);
        this.ctx.moveTo(init.x, init.y);
        polygon.angles.forEach(function (angle, i) {
            //Already handled first vertex.
            if (i === 0)
                return;
            var vertex = util_service_1.GetVertexFromRadiusAndAngle(polygon.radius, angle);
            _this.ctx.lineTo(vertex.x, vertex.y);
        });
        this.ctx.closePath();
        this.ctx.fillStyle = polygon.color;
        this.ctx.fill();
        this.ctx.restore();
    };
    GameService.prototype.drawCircle = function (sun) {
        this.ctx.beginPath();
        this.ctx.arc(sun.origin.x, sun.origin.y, sun.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = sun.color;
        this.ctx.fill();
    };
    return GameService;
}());
exports.GameService = GameService;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var system_entity_1 = __webpack_require__(0);
var direction_enum_1 = __webpack_require__(3);
/**
 * Created by Grimbode on 02/12/2017.
 */
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(point, radius, color, rotationSpeed, rotationDirection) {
        if (rotationSpeed === void 0) { rotationSpeed = 1; }
        if (rotationDirection === void 0) { rotationDirection = direction_enum_1.Direction.ClockWise; }
        var _this = _super.call(this, point) || this;
        _this.point = point;
        _this.radius = radius;
        _this.color = color;
        _this.rotationSpeed = rotationSpeed;
        _this.rotationDirection = rotationDirection;
        _this.angles = [];
        return _this;
    }
    Polygon.prototype.add = function (angle) {
        this.angles.push(angle);
    };
    return Polygon;
}(system_entity_1.System));
exports.Polygon = Polygon;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var point_entity_1 = __webpack_require__(2);
var Vertex = /** @class */ (function (_super) {
    __extends(Vertex, _super);
    function Vertex(x, y) {
        return _super.call(this, x, y) || this;
    }
    return Vertex;
}(point_entity_1.Point));
exports.Vertex = Vertex;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var circle_entity_1 = __webpack_require__(4);
/**
 * Created by Grimbode on 02/12/2017.
 */
var Orbit = /** @class */ (function (_super) {
    __extends(Orbit, _super);
    function Orbit(point, radius, angle, aDirection, speed) {
        var _this = _super.call(this, point, radius) || this;
        _this.angle = angle;
        _this.aDirection = aDirection;
        _this.speed = speed;
        return _this;
    }
    return Orbit;
}(circle_entity_1.Circle));
exports.Orbit = Orbit;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Grimbode on 07/12/2017.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var circle_entity_1 = __webpack_require__(4);
var Sun = /** @class */ (function (_super) {
    __extends(Sun, _super);
    function Sun(point, radius, color) {
        var _this = _super.call(this, point, radius) || this;
        _this.color = color;
        return _this;
    }
    return Sun;
}(circle_entity_1.Circle));
exports.Sun = Sun;


/***/ })
/******/ ]);
//# sourceMappingURL=polygon.sparksoft.js.map