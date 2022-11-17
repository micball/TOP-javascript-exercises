const sumAll = function(numOne, numTwo) {
    let temp = [];
    let sum = 0;
    if (numOne < 0 || numTwo < 0 || typeof numOne != 'number' || typeof numTwo != 'number') {
        return "ERROR";
    }
    if (numOne > numTwo){
        for (let i = numTwo; i <= numOne; i++){
            temp.push(i);
        }
    } else if (numTwo > numOne) {
        for (let i = numOne; i <= numTwo; i++){
            temp.push(i);
        }
    } else if (numOne == numTwo) {
        return numOne+numTwo;
    } else if (numTwo == undefined) {
        return numOne;
    }

    for (let i = 0; i < temp.length; i++) {
        sum += temp[i];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
