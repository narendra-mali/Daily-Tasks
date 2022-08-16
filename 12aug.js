//object methods
 //1)Object.assign()
 //method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//  const target = { a: 1, b: 2 };
// const source = { b: 3, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }
//=========================================================================================================================
 //2)object.create()
// const person = {
//     isHuman: false,
//     printIntroduction : function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);         //oject create method
  
//   me.name = 'NM'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();

//===============================================================================s============================================
//accesing object 
// const object1 = {
//     a: 'somestring',
//     b: 42,
// }

// for (const[key,value] of Object.entries(object1)) {

//     console.log(`${key} = ${value}`)
// }

//===============================================================================s============================================
// const obj = {       
//     a: 'nm',
//     b: 42 
// }
// const map = new Map(Object.entries(obj));
// console.log(map); 
// =============================================================================================================================
//The Object.freeze() method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
//  A frozen object can no longer be changed: new properties cannot be added, 
// //  existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed
// const obj = {
// prop: 42
// };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj.prop);
//   // expected output: 42

// =============================================================================================================================
// const user = {
//     name: 'na',
//     age: 20,
//     courses: ['java', 'mysql']
//   }
//   for (const property in user) 
//   {
//     const value = user[property]; // Read the value 
//     console.log(property, value);
//   }  

// =============================================================================================================================

// const person = {
//     lastName: ': ' + 'bolaji',
//     firstName: ': ' +'ayodeji',
//     age: ': ' + 19,
//     gender: ': ' + 'male',
//     status: ': ' + 'single',
//     beards: ': ' +'NO',
//     skinColor: ': ' + 'dark'
//   }
  
//   for (i in person)
//   console.log(i, person[i]);

// =============================================================================================================================
