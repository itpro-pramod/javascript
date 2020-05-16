const numbers = [1, 2, 3, 4];

//iterate index of array
for (let number in numbers) {
    console.log(number);
}

//iterate values of array
for (let number of numbers) {
    console.log(number);
}

//iterate value plus index 
numbers.forEach((element, index) => {
    console.log(`${index} ${element}`);
});
