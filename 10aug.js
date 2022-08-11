//for in loop
// const student = {
//     name: 'naren',
//     class: 7,
//     age: 12
// }


// for ( let key in student ) {

//    // display the properties
//    
//    //console.log(student);

// Note - It displays the output i.e 3 times the keys present in object
// }
//=========================================================================================
// const student = {
//     name: 'naren',
//     class: 7,
//     age: 12
// }


// for ( let key in student ) {

//    // display the properties
//    console.log(`${key}=> ${student[key]}`)
//    //console.log(student);
// }

// ====================================================================================================
        //updating values of properties :

        // const salaries= {
        //     Jack : 24000,
        //     Paul : 34000,
        //     Monica : 55000
        // }
        
        // // using for...in
        // for ( let i in salaries) {
        
        //     // add a currency symbol
        //     let salary = "*" + salaries[i];
        
        //     // display the values
        //     console.log(`${i} : ${salary}`);
        // }

// ============================================================================
        // var nm = {
        //     name : "Narendra" ,
        //     id : 10 ,
        //     age : 12 

        // }
        // for (var key in nm){

        //     console.log(`${key} : ${nm[key]}`);

        // }

// =================================================================================
        //Template literal 
// function greet(name){

//     greet  = `hi ${name} , Nice to meet you `;

//     console.log(greet);

// }
 
// greet('narendra');


// =================================================================================

// function greet(name){

//     greet  = `hi ${name} , Nice to meet you `;

//     console.log(greet);

// }
// function greet(){

    

//     console.log("blank" );

// }
// greet('narendra');
// greet();


// ========================================================================================
//Arrow functions 
// let sum =(a,b)=>{

//     return a+b ;

//     console.log(sum);

    
 
    

// }
// //sum(10,20);                             //it calling but not value change
// console.log(sum(10,20));               

//============================================================================================
// let sum =(a,b)=>a+b

                     
//     //it calling but not value change
// console.log(sum(10,20));              
                                    //sYNTAX BECOME SIMPLE   
                                    //NOTE - {} REMOVE THEN IMPLICTALLY RETURN

//==============================================================================================

// Array methods

let arr = [1,4,6,78,9,0,4]

// console.log(arr);

// arr.push(90);                        // push method
// console.log(arr);
    

// arr.pop();                          // pop method
// console.log(arr);

//                                     // slice method
// console.log(arr.slice(0,2));          // it prints from 0 to 2   including 0 index but not two   0 to 2         => index [0,1]
//  console.log(arr.slice(0,3));                   // index [0,1,2]

// console.log(arr.indexOf(4));                //indexof     gives index   
 
//console.log(arr.length);            //gives count of elements

// console.log(arr.length);            //gives count of elements


//======================================================================================================

// const nm = {
//         name : "narendra",
//         age : 21 
// }
// console.log(nm.name)                              //  using .  or []  we can access this property
// console.log(nm['age'])

// nm.age = 31 ;                           // we can change this property

// console.log(nm.age) 

//=======================================================================================================



// const intr = () =>{
        
// const nm = {
//         name : "narendra",
//         age : 21 
// }
//      return `Hi my name is ${nm.name} and age is ${nm.age} `

        
// }
// console.log(intr(10,"Narendra"));

//==========================================================================================================

//  const letters =() =>{
//         const n = `hey narendra `
//         for (letter in n){
//                 console.log(n[letter]);                  //if we print letter then ans is number

//         }
//  }
//  letters();

// const letters =() =>{
//                  const n = `hey narendra `
//                  for (letter in n){
//                  console.log(letter);                  //if we print letter then ans is number
        
//                 }
// }
// letters();

//=============================================================================================================

const arraysum = (numbers) =>{

        let result = 0 ;
        for (const number of numbers){
                //console.log(number)
                result = result + number 
        }
        return result;
}
const nums = [1,2,3,4]
console.log(arraysum(nums))