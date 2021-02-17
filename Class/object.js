var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otobus X: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 2, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 3, y: 5 };
