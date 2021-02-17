interface Point {
    x: number, 
    y: number
}

interface Vehicle {
    travelTo(point: Point): void
  
}


class Taxi implements Vehicle {

    // private color: string
    // private currentLocation : Point

    constructor(private location?: Point, private color?: string){
        // this.color = color;
        // this.currentLocation = location
    }

    travelTo(point: Point): void{
        console.log(`Taksi X: ${this.location.x} Y: ${this.location.y}'dan ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}


let taxi_1:  Taxi = new Taxi({ x: 2 , y: 5 },'Red')
taxi_1
taxi_1.travelTo({ x: 1, y: 2 })

let taxi_2 = new Taxi({ x : 3 , y: 4 })
let taxi_3 = new Taxi()
