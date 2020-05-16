const courses = [
    { id: 1, name: 'a' },
    { id: 1, name: 'b' }
];

//find object in array if criteria match
const course = courses.find(course => course.name === 'a');
console.log(course);

//find object in array if criteria match
const course = courses.find((course) => {
    return course.name === 'a';
});
