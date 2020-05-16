let numbers = [1, 2, 3, 4];

let another = numbers;

//solution 1 for empty array
numbers = [];

console.log(numbers);
console.log(another);

//Solution 2 for empty array
numbers.length = 0;
console.log(numbers);
console.log(another);

//solution 3 for emptying array

numbers.splice(0,numbers.length);
console.log(numbers);
console.log(another);