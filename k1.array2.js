//  filter
//  loop
// ? returna array
// ? trere is more possibility that original array size and
// ? returned array size is different
// const priceList =[45, 55, 65, 75, 85, 95, 105];

// const newpriceList = priceList.filter((item, index, array) => {
//     return item >70;
// // priceList.filter((item, index, array) => {
// //     console.log(item);
// });
// console.log(newpriceList);

// ? example 2
// const numList = [52, 63, 75, 89, 91, 103, 204, 500];

// ? only even numbers from numlist array
// const newnumList = numList.filter((item, index, arrsy) => {
//     let remainder = item %2;
//     if(remainder===0){
//         return item;
//     }
// }
// );

// const newnumList2 = numList.filter((element) => element %2 ===0);
// console.log(newnumList2);

// ? find
// ? loop
// ? find return value 
// ? function => to find soecific value

// const numlist = [52, 63, 75, 89, 103, 204, 500];

// const value = numlist.find((item, index, array) =>{
// if (iten ===91){
//     return item;
// }
// });
// const value2 =numlist.find((item) => item ===204);
// console.log(value2);

// const sthg = [10, 0, 45, 65];
// const value = sthg.find ((item) => {
//     return item ===0;
// });
// console.log(value);

// ? reduce
// ? forEach
// ? loop
// ? doesnot return anything
// const milegeList =[45, 35, 50, 20, 11, 6];

// let total =0;
// milegeList.forEach((item, index, array,) => {
//     total = total + item;
// });
// console.log(total);

// const mileageList =[45, 35, 50, 20, 11, 6];
// ? reduce

// const value = mileageList.reduce((total, item, index,self)=>{
//     return total + item;
// },0);
// console.log(value);

// ? sort
// const marks =[45,55,75,28, 32,11];
// const nameList =["RAjdev","dipak","yunika","sureshi"];
// const sortedArray = nameList.toSorted();
// console.log(SortedArray);

// nameList.sort().reverse();
// console.log(nameList);

// const marks =[45,55,75,28, 32,11];

// ? a-b => ascending sort
// ? b-a => decending sort
// marks.sort((a,b) => {
//   return a-b;
// })
// console.log(marks);


