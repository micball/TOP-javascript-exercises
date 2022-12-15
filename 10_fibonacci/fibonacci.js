const fibonacci = function(num) {
    if (num <= 0){
        return "OOPS";
    }
    let fib = [1, 1];
    if (num <=2){
        return 1;
    }
    for (let i = 2; i < num; i++){
        fib.push(fib[i-2]+fib[i-1]);
    }
    return (fib[num-1]);
};

// Do not edit below this line
module.exports = fibonacci;
