/*
Написать собственную реализацию трёх методов массива (например, map, filter, reduce)
и добавить их в прототип Array, чтобы они работали как встроенные.*/

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i]);
    }
    return result;
};

const numbers = [1, 2, , 4];
console.log(numbers.myMap(num => num + 2));


Array.prototype.myFilter = function (callback) {
    const result = []; // Создаем пустой массив для результатов

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};


console.log(numbers.myFilter(item => item > 3));


Array.prototype.myReduce = function (callback, initialValue) {

        accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {

        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
};


const nums = [1, 2, 3, 4];
const words = ['s', 'f', 'e', 'y']


console.log(nums.myReduce((acc, val) => acc + val, 10));

console.log(nums.myReduce((acc, val) => acc + val, 0));

console.log(words.myReduce((acc, val) => acc + val, ''));



