//  array => collection of data
//  can contain mixed data types

// ? static language => array is collection of similar data types

// ? dynamic language => array is collection of mixed data type

// let temperatureList = [4, 15, 28, 20, 15];
// console.log(temperature);
// console.log(typeof temperatureList);

// let mixedArray = {
//     1,
//     'nepal',
//     true,
//     0,
//     null,
//     undefined,
//     {name: 'RAjdev'},
//     [1,2,3],
// };
// console.log(mixedArray);
// console.log(typeof mixedArray);

// let students = ['Rohan', 'milan', 'Aayush', 'Nareshi', 'prajita'];

// console.log(students);
// ? array has index as key
// ? index always starts with zero
// ? order is preserved in array

// ? to get length of array
// console.log(students.length);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// for (let i = 0; i <=students.length -1; i++){
//     console.log(students[i]);
// }

// ? array methods
// ? push,pop, shift, unshift, reserve,sort

// let numList = [200, 300, 500];
// ? push => to add items to end of array
// numList.push(700);

// ? pop => removes last item from array
// numList.pop();

// ? shift => removes first item from array
// numList.shift();

// ? unshift => add item to start of array
// numList.unshift(50, 100);

// ? reverse => reverses order of array
// numList.reverse();
// numList.sort();
// console.log(numList);
// ?more methods
// ? array loop
// ? map, filter ,find, reduce

// const priceList = [100, 200, 300,400, 500];

// ? returns new array
// ? to change array data
// ? original array size === returned array size
// ? to change array data
//  const newpriceList= priceList.map((item, index, array) =>{
    // console.log(item, index);
//     return item +50;
// });
// console.log(newpriceList);


// const words = ['apple', 'ball', 'cat'];

// const newwords = words.map((item, index, array) => {
//     const upperCaseword = item.toUpperCase();
//     return upperCaseword;
// });

// console.log(newwords);

const washingmachineList= [
    {
        brand: 'LG',
        price: 999,
    },
    {
     brand: 'samsung',
     price: 899,
    },
    {
        brand: 'Whirlpool',
        price: 1199,
    },
];
// ? increase price of each item by 50
const newList = washingmachineList.map((item, index,  array) =>{
    let newprice = item.price +100;

    return { brand: item.brand, price: newprice};
});
console.log(newList);