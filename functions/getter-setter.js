const person = {
    firstName: "Pramod",
    lastName: "Jadhav",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        var parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = "Aarav Jadhav";
console.log(person);