
// // Adding value of a function via another function
// function TheaterSeats(){
//     this._seats = []
// }

// TheaterSeats.prototype.placePerson = function(person){
//     this._seats.push(person)
// }

// let seats = new TheaterSeats()
// seats.placePerson({name: "Thet Paing Lin"})

// console.log(seats)


// hidding information by clouser and scope concept
// let greeting = 'Good Morning'

// function greets(person){
//     let fullName = `${person.name} ${person.surname}`

//     return function(){
//         console.log(`${greeting} ${fullName}`)
//     }

// }


// let test = greets({name:"John",surname: "Smith"});
// test()

// Three privarcy level
// function TheaterSeats(){
//     let seats = []

//     this.placePerson = function(person){
//         seats.push(person)
//     }

//     this.countOccupiedSeats = function(){
//         return seats.length
//     }

//     this.maxSize = 10
// }

// TheaterSeats.prototype.isSoldOut = function(){
//     console.log(this.countOccupiedSeats() >= this.maxSize)
// }

// TheaterSeats.prototype.countFreeSeats = function(){
//     console.log(this.maxSize - this.countOccupiedSeats())
// }

// let cinemaOne = new TheaterSeats()

// cinemaOne.maxSize = 12
// cinemaOne.countFreeSeats()

// IIFE

// let value = function(){
//     console.log(3 + 2)
// }();

// Createing meta-clouser with an IIFE

// let TheaterSeats = (function(){
//     let priv =  []

//     function TheaterSeatsConstructor(){
//         this.maxSize = 10
//     }

//     TheaterSeatsConstructor.prototype.placePerson = function(person){
//         seats.push(person)
//     }

//     TheaterSeatsConstructor.prototype.countOccupiedSeats = function(){
//         return seats.length
//     }

//     TheaterSeatsConstructor.prototype.isSoldOut = function(){
//         return seats.length >= this.maxSize;
//     }

//     TheaterSeatsConstructor.prototype.countFreeSeats = function(){
//         return this.maxSize - seats.length
//     }

//     return TheaterSeatsConstructor
// }());

// var  TheatreSeats = (function() {
//     var priv = {};
//     var id = 0;

//   function TheatreSeatsConstructor() {
//     this.id = id++;
//     this.maxSize = 10;
//     priv[this.id] = {};
//     priv[this.id].seats = [];
//   }

//   TheatreSeatsConstructor.prototype.placePerson = function(person)    {
//     priv[this.id].seats.push(person);
//   };
  
//   TheatreSeatsConstructor.prototype.countOccupiedSeats =    function() {
//     return priv[this.id].seats.length;
//   };

//   TheatreSeatsConstructor.prototype.isSoldOut = function() {
//     return priv[this.id].seats.length >= this.maxSize;
//   };

//   TheatreSeatsConstructor.prototype.countFreeSeats = function() {
//     return this.maxSize - priv[this.id].seats.length;
//   };

//   return  TheatreSeatsConstructor;
// }())

// Define properties with getter and setter

// let person = {
//     name: "John",
//     surname: "Smith",
//     get fullName(){return `${this.name} ${this.surname}`},
//     set fullName(value){
//         let parts = value.toString().split(" ");
//         this.name = parts[0] || "";
//         this.surname = parts.slice(1).join(" ") || ""
//     },
//     email: "John.smith@packtpub.com"
// }
// person.fullName = "Thet Paing Lim"

// console.log(person.fullName)
// console.log(person.name)
// console.log(person.surname)


// // Describing properties by literal object
// let person = (function(){
    
//     function personConstructor(){
//         this.name = "";
//         this.surname = "";
//         this.email = "";

//         Object.defineProperty(
//             this,
//             "fullName",
//             {
//                 get: function(){return this.name + " " + this.surname},
//                 set: function(value){
//                     let parts = value.toString().split(" ");
//                     this.name = parts[0] || "";
//                     this.surname = parts.slice(1).join(" ") || "";
//                 }
//             }
            
//         )
//     }

//     return personConstructor
// }())

// let firstIndividual = new person()
// firstIndividual.fullName = "Thet Paing Lin"

// console.log(firstIndividual.fullName)
// console.log(firstIndividual.surname)
