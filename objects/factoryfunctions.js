function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw circle for ' + radius);
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());

const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw());