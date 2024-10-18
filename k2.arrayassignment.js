// const washingMachineList = [
//   {
//     brand: 'LG',
//     price: 999,
//   },

//   {
//     brand: 'Samsung',
//     price: 899,
//   },

//   {
//     brand: 'Whirlpool',
//     price: 1199,
//   },
// ];

// ? find machines whose price is greater than 900

//  const newList = washingMachineList.filter((total,index,array) =>{
//  return item.price > 900;
// });
// console.log(newList);
// ? find machine whose brand is whirlpool
// const requiredMachine = washingMachineList.find((item, index, array) => {
//   return item.brand === 'Whirlpool';
// });

// console.log(requiredMachine);
// ? decrease price of samsung machine by 15% as festival discount

//  const newList=washingMachineList.map((item, index, self) => {
//     if (item.brand === 'samsung') {
//         return{
//             brand:item.brand,
//             price: item.price - (15/ 100) * item.price,
//         };
//     }
//     return item;
// });
//  console.log(newList);

const productList = [
  {
    name: 'Shoes',
    price: 5500,
  },
  {
    name: 'Jacket',
    price: 15000,
  },
  {
    name: 'cap',
    price: 1500,
  },
  {
    name: 'Goggles',
    price: 6000,
  },
  {
    name: 'Trousers',
    price: 5000,
  },
];

// ?decrease every item price with 1000
// const newList = productList.filter((item, index, array) =>{
//   return item.price= item.price + 1000;
// });
// console.log(newList);

// ?filter items whose price is less than or equals to 5000
// const newList = productList.filter((item, index, array) =>{
//   return item.price <= 5000;
// });
// console.log(newList);
// ?find price of item whose name is "cap"
// const newList = productList.filter((item, index, self) => {
//   if(item.brand === 'cap'){
//     return item.price;
//   }
// });
// console.log(newList);