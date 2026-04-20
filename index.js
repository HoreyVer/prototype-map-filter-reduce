/*
Написать собственную реализацию трёх методов массива (например, map, filter, reduce)
и добавить их в прототип Array, чтобы они работали как встроенные.*/

Array.prototype.myMap = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
};

const numbers = [1, , 3, 4, 5, 6];
//console.log(numbers.myMap((num => num + 2)));

/*-----------------------------------------------------------------------*/

Array.prototype.myFilter = function (callback, thisArg) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

//console.log(numbers.myFilter(item => item > 3));

Array.prototype.myReduce = function (callback, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    }
    return accumulator;
};


const words = [,'s', 'f', 'e', 'y']


console.log(numbers.myReduce((acc, val) => acc + val, 10));

console.log(numbers.myReduce((acc, val) => acc + val, 0));

console.log(words.myReduce((acc, val) => acc + val, ''));
