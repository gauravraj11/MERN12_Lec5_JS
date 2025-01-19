var myArray = [1, 2, 3, 4, 5];

var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum);