console.log('object section start');

let person = {
    name: 'Pramod',
    age: 31
};

console.log(person);

//Dot notation
console.log(person.name);

//re-assign value to property
person.name = "Aarav";
console.log(person.name);

//Bracket notation
// mostly used for accessing properties dynamically at runtime
console.log(person["name"]);

let runTimePropertyName = "name";
console.log(person[runTimePropertyName]);

