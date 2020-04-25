'use strict'

const fibonacci = () => {
    let a = 0, b = 1, temp = 0;
    let result = [];

    while (isFibonnaci(a)) {
        result.push(a);
        temp = a;
        a += b;
        b = temp;
    }

    return result;
}

const isFibonnaci = (num) => {
    const fibonnaciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    return fibonnaciSequence.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
