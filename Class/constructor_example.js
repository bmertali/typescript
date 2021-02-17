var Taxi = /** @class */ (function () {
    // private color: string
    // private currentLocation : Point
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // this.color = color;
        // this.currentLocation = location
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + this.location.x + " Y: " + this.location.y + "'dan " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, 'Red');
taxi_1;
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi({ x: 3, y: 4 });
var taxi_3 = new Taxi();
