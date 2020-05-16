const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// const combine = first.concat(second);
// const slice = combine.slice(5);

// console.log(slice);
// console.log(combine);

const combine = [...first,'pramod',...second,'jadhav'];
console.log(combine);

const copyarray = [...combine];
console.log(copyarray);