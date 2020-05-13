let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

let obj = { value: 20 };

function increment(obj) {
    obj.value++;
}
increment(obj);
console.log(obj);

