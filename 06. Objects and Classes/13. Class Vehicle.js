class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}
let parts = { engine: 2000, power: 115 };
let vehicle = new Vehicle('Peugeot', '307', parts, 200);

vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
