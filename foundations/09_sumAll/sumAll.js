const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a < b && a >= 0 && b >= 0) {
    let arr = [];
    for (let i = a; i<= b; i++) {
        arr.push(i);
    }
    //gets the sum of the array
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return sum; 
} else if (Number.isInteger(a) && Number.isInteger(b) && a > b && a >= 0 && b >= 0) {
    let arr = [];
    for (let i = b; i<= a; i++) {
        arr.push(i);
    }
    //gets the sum of the array
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return sum; 
} else {return 'ERROR';}
};

// Do not edit below this line
module.exports = sumAll;
