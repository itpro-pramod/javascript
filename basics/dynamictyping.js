console.log('Dynamic typing section start');

let name = "Pramod"; //String literal
let age = 31;//Number literal
let isApproved = true;//Boolean literal
let firstName = undefined;
let selectedColor = null;

console.log('type of name - ' + typeof name);
console.log('type of age - ' + typeof age);
console.log('type of isapproved - ' + typeof isApproved);
console.log('type of firstname - ' + typeof firstName);
console.log('type of selected color - ' + typeof selectedColor);
//re-assigning value to name
name = 123;
console.log('type of name - ' + typeof name);