// ? object copy

// let x = 5;
// let y= x;
//  x =7;
// console.log(y);

// ? object

let studentDetails ={
    fname: 'Rajdev',
    lname: 'sah',
    address: {
        permanent: 'A',
    },
};
// let studentDetails2 = studentDetails;
// studentDetails2.fname = 'raj';
// console.log(studentDetails2);

// ? ...
// ? spread operator

// let studentDetails2 = { ...studentDetails};
// studentDetails2.address.permanent = 'B';
// console.log(studentDetails2);

// ? structureclone
// ? deep copy

let studentDetails2 = structuredClone(studentDetails);

studentDetails2.address.permanent = 'Z';
console.log(studentDetails);