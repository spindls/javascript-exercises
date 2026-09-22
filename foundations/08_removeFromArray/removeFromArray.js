const removeFromArray = function(arr, ...Args) {
    const parameters = Array.from(Args);
    for (let i = parameters.length -1; i >= 0; i--)  {
    if (arr.indexOf(parameters[i]) === -1)
        continue;
    while (arr.indexOf(parameters[i]) != -1) {
    arr.splice(arr.indexOf(parameters[i]), 1);   
    }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
