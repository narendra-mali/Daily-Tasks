
//1)                       //Default parameters
// function greet(name){

//     greet  = `hi ${name} , Nice to meet you `;

//     console.log(greet);

// }
// function greet2(){

    

//     console.log("blank" );

// }
// //greet('narendra');
// greet();

//=====================================================================================================================

     //DEFAULT PARAMETERS

    //  function multiply(a, b = 1) {
    //     return a * b
    //   }
      
    //   console.log(multiply(5, 2))         // 10
    //   console.log(multiply(5))            // 5
    //   console.log(multiply(5, undefined))  // 5
      
//=====================================================================================================================

      // function multiply(a, b = 1) {
      //   return a * b
      // }
      
      // console.log(multiply(5, 2))         // 10
      // console.log(multiply(5))            // 5
      // console.log(multiply(5,"yhagh"))  // 5

//=====================================================================================================================
 //used math functions //calculated time in minutes ,seconds from milliseconds

// const ms = 54000000;

// function convertMsToTime(milliseconds) {
//   let seconds = Math.floor(milliseconds / 1000);
//   //console.log(seconds);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   console.log(minutes);

//   seconds = seconds % 60;

//   minutes = minutes % 60;

//   hours = hours % 24;

//   return `{${hours}: ${minutes}:${seconds}}`;
// }

// // console.log(convertMsToTime(54000000)); 
// // console.log(convertMsToTime(86400000));
// // console.log(convertMsToTime(36900000));
// console.log(convertMsToTime(15305000)); 

//=====================================================================================================================

//spread operator

// const odd = [1,3,5];
// const combined = [...odd, 4,6];
// console.log(combined);



//==========================================================================================================================
//get set
// const myObj = {
//       a: 7,
//       get b() {
//         return this.a + 1;
//       },
//       set c(x) {
//         this.a = x / 2;
//       }
//     };
    
//     console.log(myObj.a); 
//     console.log(myObj.b); 
//     myObj.c = 50;         
//     console.log(myObj.a);    

//======================================================================================================

// var pubg = {
//       name: 'nare',
//       type: 'Normal',
//       number: 19
//   };
  
//   console.log(Object.values(pubg));
//   //console.log(values)

//========================================================================================================
// var details = { name: 'Charmander', type: 'Fire', number: 19};
// var evolution = { evolutionOne: 'Charmeleon', evolutionTwo: 'Charizard'};
// var ability = { abilityOne: 'Blaze' };

// var pokemon = Object.assign(details, evolution, ability);

// console.log(pokemon);
// ===========================================================================================================
// const nm = { 
//       name : 'narendra',
//       age : 21 ,
//       id : 13,
//       ajay :{ 
//             name : 'ajay',
//             age : 22 ,
//             id : 14,
//             sem : 2
//       }
      
// }

// // console.log(Object.keys(nm));
// // console.log(Object.values(nm));
// console.log(Object.keys(nm.ajay));
//===============================================================================================================