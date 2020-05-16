const courses = [
    { id: 1, name: 'a' },
    { id: 1, name: 'b' }
];

//find object in array if criteria match
const course = courses.find((course) => {
    return course.name === 'a';
});

//returns -1 means object with criteria not found
//returns greater than -1 means object found in array with given criteria
const courseIndex = courses.findIndex((course) => {
    return course.name === 'mmm';
});

console.log(courseIndex);

console.log(course);