const removeFromArray = function(array, ...theArgs) {
    let tempArr = array.slice();
    for (let j = 0; j < theArgs.length; j++){
        for (i=0; i < tempArr.length; i++){
            if (tempArr[i] === theArgs[j]) {
            tempArr.splice(i, 1);
            }
        }
    }
    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
