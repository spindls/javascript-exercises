const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    
    } else {
        let poop = "";
        for (let i = 0; i < num ; i++) {
         poop += string;
    
        }
        return poop;
    }

};

// Do not edit below this line
module.exports = repeatString;
