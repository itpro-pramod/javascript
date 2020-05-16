const numbers = [1, 2, 3, 4, 1];

console.log(numbers.indexOf(1));
console.log(numbers.indexOf('1'));
console.log(numbers.indexOf(4));

//if indexOf returns -1 means element not found in array
console.log(numbers.indexOf('1') !== -1);

//if indexOf returns greater than -1 means element found
console.log(numbers.indexOf(3) !== -1);

console.log(numbers.indexOf(1));

//returns true if element found in array else false
console.log(numbers.includes(1));

//if duplicate elements in array and if you want to find last element index
//then use lastIndexOf method
console.log(numbers.lastIndexOf(1));




