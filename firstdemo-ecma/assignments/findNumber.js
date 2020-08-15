// Given an array of numbers (10, 20, 2, 12, 5, 3, 8), find the first number greater than 11.

let numbers = [10, 20, 2, 12, 5, 3, 8];
let result = null;
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 11) {
        result=numbers[i];
        break;
    }
}
console.log(result);