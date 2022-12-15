const palindromes = function (phrase) {
    let newPhrase = phrase.toLowerCase();
    let arr = newPhrase.split('');
    arr = arr.filter(letter => (/\w/).test(letter) ? true : false);
    let backArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        backArr.push(arr[i]);
    }
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] != backArr[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
