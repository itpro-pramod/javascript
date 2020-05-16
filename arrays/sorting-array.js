const numbers = [2, 1, 4, 3];

console.log('sort', numbers.sort());

console.log('reverse', numbers.reverse());

const courses = [
    { id: 1, name: 'Node' },
    { id: 2, name: 'Javascript' }
];

courses.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);