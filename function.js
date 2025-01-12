
// Named Function add: pointer to the function
function add1(a, b){
    return a+b
}

//Anonymous function function returns pointer to the variavle add
const add2 = function(c, d){
    return c+d;
}

//Arrow Function

const add3 = (e, f) => {
   return e+f;
}

// function call
console.log(add1(32,21));
console.log(add2(4,6));
console.log(add3(8,9));


// add1(32,21);
// add2(4,6);
// add3(8,9);