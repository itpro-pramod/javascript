const numbers = [0,1, 2, 3, 4];

const every = numbers.every((value) => {
    return value > 0;
});

console.log(every);

//at least 
const atleast = numbers.some((value) => {
    return value > 5;
});

console.log(atleast);