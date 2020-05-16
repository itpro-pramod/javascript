const numbers = [1,2,3,4];

//remove elements at end in array
const last = numbers.pop(1, 2, 3);
console.log(last);
console.log(numbers);

//remove elements at start in array
const first = numbers.shift(1);
console.log(first);
console.log(numbers);

//remove elements at middle in array
const middle = numbers.splice(2,1);
console.log(middle);
console.log(numbers);
