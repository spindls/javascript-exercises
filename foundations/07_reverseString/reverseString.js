const reverseString = function(string) {
    let arr = string.split("");
    let reversedArr = arr.reverse();
    let reversedString = reversedArr.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
