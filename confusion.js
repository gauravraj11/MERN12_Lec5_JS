const A = {
    "name" : "Gaurav",
    roll : 123,
    desig: 'raj',
    11: "MERN"
}

const B = {
    "name1" : "Gaurav",
    roll1 : 123,
    desig1: 'raj',
    111: "MERN"
}

const C = Object.assign({},A, B)

const D = {...A, ...B}

console.log(C, D);








// Object.freeze(A);

// A["name"]=  "MERN Stack";










// const A = 123;

// A = 321;

// console.log(A);
// const A = [1,2,3,4,5];

// A[3]= 321;

// console.log(A);