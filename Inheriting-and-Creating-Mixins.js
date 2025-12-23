// // creating object with simplest apporact
// let person = {
//     name : "Thet Paing",
//     surname : "Lin",
// }


// // creating option using constructor
// function person(name, surname){
//     this.name = name,
//     this.surname = surname
// }

// let personOne = new person("Thet Paing", "Lin")

// // An obect we created inherit all the method and properties of an instance empty object

// // Verify with to stirng
// personOne.toString()

// // Check with 'Instance of' an object
// person instanceof Object

// ==========================================================================================//

// Introduction and role of object.create method
// Create an object without prototype

// let myObject = Object.create(null) 'myObject variable contains an empty object without prototype'

// Check the result
// console.log(Object.getPrototypeOf(myObject))

// let person = {
//     name : "Thet Paing",
//     surname : "Lin"
// }

// let myObject = Object.create(person) 'Now myObject variable has person object as it specific prototype'

// let devoper = Object.create(
//     person,
//     { knownLanguag:
//         {
//             writable : true,
//             configurable: true
//         }

//     }
// );

// // By using setPrototypeOf
// let person = {
//     name : "John",
//     surname : "Smith"
// }

// let devloper = {
//     knownLanguage : "Javascript"
// }

// Object.setPrototypeOf(devloper, person)
//  assigned the person object as the prototype of the developer object.

// Inheritance and constructor

// function Person(name, surname){
//     this.name = name;
//     this.surname = surname
// }

// function Developer(name, surname, knownLanguag){
//     Person.apply(this, arguments)
//     this.knownLanguag = knownLanguag
// }
// breaks the consistency of the instanceof operator on the prototype chain