const numbers = [-1, 0, 1, 2, 3, 4];

const filterData = numbers.filter((number) => {
    return number > 0;
});

console.log('filterData :>> ', filterData);