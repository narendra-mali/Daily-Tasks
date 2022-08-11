//1)
//string immutable cannot changed
// let a = 'hello';
// a[0] = 'H';
// console.log(a); // "hello"

//--------------------------------------------------

//2)multiline string

// let a = "My name is Narendra Mali " + "i like to play football" + "i like to play football";
// console.log(a);

//  let a = "My name is Narendra Mali / i like to play football /i like to play football";
//  console.log(a);


//3) NaN
// let result = 'hello ' - '4';
// console.log(result);

//functions
//===================================================================================================


//4)Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.
// function greet() {
//     console.log("Hello there!");
// }

// // calling the function
// greet();

//======================================================================================================


//JS objects
//You do not need to create classes in order to create objects.
// object
// const student = {
//     firstName: 'ram',
//     class: 10
// };
// console.log(student.firstName);

//==========================================================================================================
// let student = {
//         firstName: 'Narendra',
//         class: 10
// };

// console.log(student.firstName);
// console.log(student.class);

//Each member of an object is a key: value pair

//================================================================================================================

//nested objects - object inside of object

// const student = {


//     narendra :{
//         marks :20,
//         std :10 
//     }

// }

// // accessing property of student object
// console.log(student.narendra);

// // accessing property of narendra object
// console.log(student.narendra.marks);

//======================================================================
//js Array

// var arr= [1,2,4,566,7,8,8,5]
// console.log(arr.length);

//========================================================================

// var arr= [1,2,4,566,7,8,8,5]
// console.log(arr[6]);
//==========================================================================
                //ARRAY METHODS
//========================================================================
//for each loop
// let arr = [1,2,4,5,6,7,8]
// arr.forEach((element)=>(console.log(element)))


// ==========================================================================
//push pop
// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];


// dailyActivities.push("Narendra");
// console.log(dailyActivities);

//=============================================================================

// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];


// dailyActivities.pop();
// console.log(dailyActivities);

// dailyActivities.pop();
// console.log(dailyActivities);

//==================================================================================



        //map 

// var arr= [1,2,4,566,7,8,8,5]
// let arr1 = arr.map((values)=>values*2);
// console.log(arr1);

   //filter 

// var arr= [1,2,4,566,7,8,8,5]
// let arr1 = arr.filter((values)=>values>2);
// console.log(arr1);

    //reduce
    // The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
    //  in order, passing in the return value from the calculation on the preceding element. The final result
    //   of running the reducer across all elements of the array is a single value.

// var arr= [1,2,3,4,5,6,7,8,9,10,11,12]
// let arr1 = arr.reduce((value1,value2)=>);

// console.log(arr1);
//=======================================================================================
//https://www.programiz.com/javascript/library/array/map


//===============================================================================================
        //concating
// let arr1 = [10,20,30,40,50,60,70,80]
// let arr2 = [10,30,40,40,60,60,200,80]



// console.log(arr1.concat(arr2));

//==========================================================================================
                    //includes
// let arr = [10,30,40,40,60,60,200,80]
// console.log(arr.includes(10));

//============================================================================================


        //Sorting
// let arr = [200,10,30,40,40,60,60,20,80]
//  for(let i=0 ; i<arr.length ; i++){
    
//     arr[i]= parseInt(arr[i]);
//     console.log(arr[i]);
// }

// //console.log(arr);
// arr = arr.sort();
// console.log(arr);


//================================================================================================