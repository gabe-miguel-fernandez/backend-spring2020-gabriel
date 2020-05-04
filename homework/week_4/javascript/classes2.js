class Vehicle {
  constructor(manufacturer, color, topspeed) {
    this.topspeedMPH = topspeed;
    this.color = color;
    this.manufacturer = manufacturer;
  }
}

let newCar = new Vehicle("ford", "yellow", 120);
console.log("Basic vehicle object:");
console.log(newCar);

// inheritance
class Car extends Vehicle {
  constructor(
    manufacturer,
    model,
    color,
    fuelType,
    maxTankGallons,
    mpg,
    topspeedMPH,
    seats
  ) {
    // super calls the parent's constructor when building a car object
    super(manufacturer, color, topspeedMPH);
    this.seats = seats;
    this.fuelType = fuelType;
    this.maxTankGallons = maxTankGallons;
    this.currentTankGallons = 10;
    this.license = null;
    this.model = model;
    this.mpg = mpg;
  }

  setLicense(licenseNumber) {
    this.license = licenseNumber;
    console.log(
      `The license of the ${this.manufacturer} ${this.model} was updated to ${licenseNumber}`
    );
  }

  range() {
    console.log(
      `The ${this.manufacturer} ${this.model} can travel an estimated ${
        this.maxTankGallons * this.mpg
      } miles before refueling.`
    );
  }

  refuel(gallons) {
    let availableSpace = this.maxTankGallons - this.currentTankGallons;

    if (gallons > availableSpace) {
      console.log(
        "There is not enough room in gas tank to store that many gallons!"
      );
    } else {
      this.currentTankGallons = this.currentTankGallons + gallons;
      // this.currentTankGallons += gallons;
      console.log(
        `The gas tank now has ${this.currentTankGallons} gallons of gas.`
      );
    }
  }

  travel(distanceToTravelMiles) {
    let gallonsToBurn = distanceToTravelMiles / this.mpg;
    if (gallonsToBurn <= this.maxTankGallons) {
      console.log(
        `${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles}`
      );
      this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
    } else {
      console.log(
        `${this.manufacturer} ${this.model} does not have enough fuel for that distance.`
      );
    }
  }

  getCurrentFuel() {
    console.log(
      `${this.manufacturer} ${this.model} has a total of ${this.currentTankGallons} gallons of gas left.`
    );
  }
}

class ElectricCar extends Vehicle {
  constructor() {
    super();
    this.seats = null;
    this.capacityKWH = null;
    this.license = null;
    this.model = null;
    this.MPKW = null;
  }
}

/*
 * Airplane characteristics
 * manufacturer
 * color
 * topSpeedMPH
 * model
 * totalEngines
 * seats
 * cruisingSpeedMPH
 * fuelBurnGalPerHour
 * maxFuelCapacity
 * currentFuelGallons
 * regulationRange; destination + 45 mins.
 *
 * Airplane actions:
 * refuel()
 * travel()
 */

class Airplane extends Vehicle {
  constructor(
    manufacturer,
    color,
    topspeedMPH,
    model,
    totalEngines,
    seats,
    cruisingSpeedMPH,
    fuelBurnGalPerHour,
    maxFuelCapacity,
    currentFuelGallons
  ) {
    super(manufacturer, color, topspeedMPH);
    this.model = model;
    this.totalEngines = totalEngines;
    this.seats = seats;
    this.cruisingSpeedMPH = cruisingSpeedMPH;
    this.fuelBurnGalPerHour = fuelBurnGalPerHour;
    this.maxFuelCapacity = maxFuelCapacity;
    this.currentFuelGallons = currentFuelGallons;
  }

  getCurrentFuel() {
    console.log(
      `INFO - Fuel: ${this.manufacturer} ${this.model} has ${this.currentTankGallons} gallons of fuel.`
    );
  }

  range() {
    console.log(
      `INFO - Range: The ${this.manufacturer} ${
        this.model
      } can travel an estimated ${
        (this.maxFuelCapacity / this.fuelBurnGalPerHour) * this.cruisingSpeedMPH
      } miles before refueling.`
    );
  }

  refuel(gallons) {
    let availableSpace = this.maxFuelCapacity - this.currentFuelGallons;

    if (gallons > availableSpace) {
      console.log(
        `ERROR - Not enough room to store ${gallons} gallons! Only enough space to add ${availableSpace} gallons of fuel.`
      );
    } else {
      this.currentFuelGallons = this.currentFuelGallons + gallons;
      // this.currentTankGallons += gallons;
      console.log(
        `INFO - Refueled: The airplane now has ${this.currentFuelGallons} gallons of fuel out of a possible ${this.maxFuelCapacity} gallons.`
      );
    }
  }
  travel(distanceToTravelMiles) {
    let gallonsToBurn =
      (distanceToTravelMiles / this.cruisingSpeedMPH) * this.fuelBurnGalPerHour;
    if (gallonsToBurn <= this.currentFuelGallons) {
      console.log(
        `INFO - Status: ${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles}`
      );
      this.currentFuelGallons = this.currentFuelGallons - gallonsToBurn;
    } else {
      console.log(
        `ERROR - Status: ${this.manufacturer} ${this.model} does not have enough fuel to travel that ${distanceToTravelMiles} distance.`
      );
    }
  }
}

// HOMEWORK: Fill out a "functional" airplane class and create 2 Airplane objects
// with methods on them being used. Save in homework folder with same filename.

console.log("\n---------- AIRPLANE OBJECTS ----------\n");

console.log("\n---------- Airbus A320 ----------\n");
let myA320 = new Airplane(
  "Airbus",
  "silver",
  537,
  "A320",
  2,
  150,
  511,
  750,
  6302,
  5000
);
console.log("First airplane is an Airbus 320");
console.log(myA320);
myA320.getCurrentFuel;
myA320.range();
myA320.refuel(10000);
myA320.refuel(2000);
myA320.travel(20000);
myA320.travel(1000);

console.log("\n---------- Boeing B737 ----------\n");
let myB737 = new Airplane(
  "Boeing",
  "white",
  583,
  "B737",
  2,
  170,
  850,
  770,
  17000,
  3000
);

console.log("Second airplane is a Boeing 737");
console.log(myB737);
myB737.getCurrentFuel;
myB737.range();
myB737.refuel(20000);
myB737.refuel(3000);
myB737.travel(30000);
myB737.travel(2000);

console.log("\n---------- CAR OBJECTS ----------\n");
// using car objects

console.log("\n---------- Honda Accord ----------\n");
let firstCar = new Car(
  "Honda",
  "Accord",
  "black",
  "gasoline",
  14.8,
  25,
  155,
  5
);

firstCar.setLicense("8HEX859");
console.log(firstCar);
firstCar.range();
firstCar.travel(200);
firstCar.getCurrentFuel;
firstCar.refuel(10);

console.log("\n---------- BMW 328i ----------\n");
let secondCar = new Car("BMW", "328i", "blue", "gasoline", 15, 20, 110, 4);

console.log(secondCar);
secondCar.travel(50);
secondCar.getCurrentFuel();
