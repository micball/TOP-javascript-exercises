const reverseString = function(string) {
    let final = "";
    let temp = string.split('');
    for (let i = 0; i < temp.length; i++) {
        final = temp[i]+final;
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
