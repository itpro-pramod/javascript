const circle = {
    radius: 1,
    draw() { console.log('draw') }
};

// const another = {};
// for (const key in circle) {
//     if (circle.hasOwnProperty(key)) {
//         another[key] = circle[key];

//     }
// }
// console.log(another);

// const another1 = Object.assign({},circle);
// console.log(another1);

const another = { ...circle };
console.log(another);
console.log(`Hi 'Pramod'`);