class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
     
    honk() {
        return "BEEP!";
    }

    toString() {
        return 'The Vehicle is a ' + this.make + ' ' + this.model + ' ' + 'from ' + this.year;
    }
}

class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    
    revEngine() {
        return "VROOM!";
    }
}

class Garage {
    constructor(capacity) { 
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)){
            return "Sorry only vehicles allowed."
        }

        if (this.vehicles.length >= this.capacity) {
            return "sorry this garage is full!"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added to garage";
    }
}