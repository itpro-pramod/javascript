var person = {
    name: 'Pramod',
    age: 31
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const Value = person[key];
        console.log('Key- ' + key + 'Value - ' + Value);
    }
}