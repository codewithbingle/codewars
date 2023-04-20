//Create a dog object that has four properties and three methods

// let dog = {};

// dog.breed = "poodle";
// dog.color = "golden";
// dog.legs = 4;
// dog.name = "Elsa";

// dog.bark = function () {
//   console.log("WOOF");
// };

// dog.jump = function () {
//   console.log("BLAST OFF");
// };

// dog.fetch = function () {
//   console.log("ZOOOM");
// };

// example of car factory constructor

function MakeCar(carMake, carModel, carColor, numOfDoors){
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.doors = numOfDoors
  this.honk = function(){
    alert('BEEP BEEP BEEF')
  }
  this.lock = function(){
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

// new syntax below

// class MakeCar{
//   constructor(carMake, carModel, carColor, numOfDoors) {
//   this.make = carMake
//   this.model = carModel
//   this.color = carColor
//   this.doors = numOfDoors
//   }
//   honk(){
//     alert('BEEP BEEP BEEF')
//   }
//   lock(){
//     alert(`Locked ${this.doors} doors!`)
//   }
// }

// let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

// let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)
