function Circle(radius) {
    this.radius = radius;
    this.Draw = function () {
        console.log('Draw for radius ' + radius);
    }
}

const circle1 = new Circle(1);
console.log(circle1);
circle1.Draw();


const circle2 = new Circle(2);
console.log(circle2);
circle2.Draw();