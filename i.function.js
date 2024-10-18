// function
//  block of code organized together to perform specific action

//  to make code reusable and less redundant
//  DRY => do not repeat  yourself
// ?syntax
//  function function_name(){
// some code here
// }

// function addNumbers(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }

// addNumbers(10, 20);
// addNumbers(2, 3);
// addNumbers(1,9);

// ? hoisting => pull up
// sayHello();
// function sayHello(){
//     console.log('Hello');
// }
// console.log(x);
// var x = 5;

// console.log(x);
// let x =5;

// ? arrow function

// const greetUser = (userName) => {
// console.log('Good afternoon $(userName)');
// };

// greetUser('Rajdev');

// const calculateproduct = (x,y) => {
//     let product = x *y ;
//     return product;
// };

// const result = calculateproduct(5,6);
// console.log(result);

// ?WAF that calculate whether given number is odd or even
// const checkoddeven = (num) =>{
//     let remainder = num %2;
//     let  result;
//     if (remainder ===0){
//         return 'even';
//     }else{
//         return 'odd';
//     }

//     return result;
// };
// const result = checkoddeven(50);
// console.log(result);

//  WAF that returns division result

// const doDivide = (x,y) => x/y;

// const division = doDivide(10,5);
// console.log(division);
// const checkoddeven = (num) => (num % 2 ===0 ? 'even' :'odd');

// const result = checkoddeven(201);
// const result2 = checkoddeven(400);

// console.log(result,result2);

// ? WAF that accepts first name and last name as input
// ? and returns full name

// const getfullname = (firstname, lastname) => {
//   let fullname = `${firstname} ${lastname}`;

//   return fullname;
// };
// const result = getfullname("Rajdev", "sah");
// console.log(result);


// const getfullname = (firstname, lastname) => {
   
  
//     return  `${firstname} ${lastname}`;;
//   };
//   const result = getfullname("Rajdev", "sah");
//   console.log(result);

// ? call back function
// ? function which is passed as a parameter to another function

// const doSum = (x,y, print) => {
//  let sum = x+y;
//  print(sum);
// };

// doSum(10,20,(value) => {
//   console.log(value);
// });
  