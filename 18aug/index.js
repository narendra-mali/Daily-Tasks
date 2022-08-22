var date = new Date()

// console.log(date);
// console.log(date.getDate())                //18 
// console.log(date.getDay())                 //4
// console.log(date.getFullYear())            //2022
//========================================================================================================
// console.log(date.getHours())                //10 : 34  then 10 hours 
// console.log(date.getMinutes())              //34 minutes
// console.log(date.getMilliseconds())           //will print milliseconds
// console.log(date.getMonth(date.setMonth()))                           // january 0       augast will be 7
// console.log(date.getTime())
// console.log(date.getSeconds())                     //print seconds
// console.log(date.getUTCDate())                 // 18 
// console.log(date.getUTCDay())                  //4                              monday 1
// console.log(date.getUTCFullYear())             //2022
// console.log(date.getUTCHours())       //       5           the time = 5:12:15
// console.log(date.getUTCMinutes())       //      12
// console.log(date.getUTCSeconds())       //      12
// //console.log(date.getVarDate())       
//========================================================================================================
              
// date.setDate(12)
// console.log(date.getDate())
//========================================================================================================
// console.log(date.getHours()) //                //18 
// console.log(date.getMinutes()) //                 //4
// console.log(date.getSeconds()) // //

// console.log(date.getUTCHours())       //       5           the time = 5:12:15
// console.log(date.getUTCMinutes())       //      12
// console.log(date.getUTCSeconds())          

// difference of +5 : 30

//========================================================================================================
// Yesterday :
// 1. learnt exception handling in javascript
// Today : 
// 1 .practicing async - await , callbacks, promises in javascript
// 2 .learning typescript

//========================================================================================================
//format    18-08-22
// var date = new Date()
// //console.log(date)
// var nd = date.getDate()               //18 
// var nm = date.getMonth() //              
// var ns = date.getFullYear() //  
// // let uh = date.getUTCHours()       //       5           the time = 5:12:15
// // let um = date.getUTCMinutes()       //      12
// // let us  = date.getUTCSeconds()  
// console.log(`${nd}-${nm}-${ns}`)

//========================================================================================================

//format 18-07-2022 at 6:0:55

// var date = new Date()
// //console.log(date)

// let ud = date.getUTCDate()       //       5           the time = 5:12:15
// let um = date.getUTCMonth()       //      12
// let uy  = date.getUTCFullYear()  

// //console.log(`${ud}-${um}-${uy}`)
// let uhour = date.getUTCHours()       //       5           the time = 5:12:15
// let umin = date.getUTCMinutes()       //      12
// let usec = date.getUTCSeconds()
// console.log(`${ud}-${um}-${uy} at ${uhour}:${umin}:${usec}`)
//========================================================================================================


// var date = new Date()
// console.log(date.toTimeString())             
// console.log(date.toDateString())
// //========================================================================================================

// var date = new Date()



// let ud = date.getUTCDate()       //       5           the time = 5:12:15
// let um = date.getMonth()       //      12
// let uy  = date.getUTCFullYear()  
// ++um;

// console.log(`${ud}-${um}-${uy}`)          //18-08-2022
// console.log(`${ud}/${um}/${uy}`)           //
// console.log(`${uy}-${ud}-${um}`)           //2022-7-18

// // moment().format("MMM");
// let monthName = date.toLocaleDateString(undefined, { month: 'short'});
// console.log(`${um}-${monthName}-${uy}`)

//========================================================================================================
// var date = new Date()
// //console.log(date)

// let ud = date.getUTCDate()       //       5           the time = 5:12:15
// let um = date.getUTCMonth()       //      12
// let uy  = date.getUTCFullYear()  

// //console.log(`${ud}-${um}-${uy}`)
// let uhour = date.getUTCHours()       //       5           the time = 5:12:15
// let umin = date.getUTCMinutes()       //      12
// let usec = date.getUTCSeconds()

// let monthName = date.toLocaleDateString(undefined, { month: 'short'});

// console.log(`${ud}-${monthName}-${uy} at ${uhour}:${umin}:${usec}`)

//========================================================================================================


// add1(add(1,2));

// const sayHi =(xyz)=>{
//     console.log(xyz())
// // }
// for(let i=0; i<10; i++){
//     if(i===2 ){
//         console.log(i)
//         break;
//     }
//     console.log(i)
// }for(let j=0; j<10; j++){
//     console.log(j)

// }
// sayHi(()=> {return"hi"})