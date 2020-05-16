const numbers = [5, 6];

//add elements at end in array
numbers.push(1, 2, 3);

//add elements at start in array
numbers.unshift(-1, 0);

//add elements at middle in array
numbers.splice(2, 0, 'pramod', 'jadhav');
console.log(numbers);