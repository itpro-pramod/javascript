function sum() {
    let total = 0;
    for (const no of arguments) {
        total += no;
    }
    return total;
}

console.log(sum(1, 2, 3, 4));