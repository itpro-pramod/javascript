function Circle(radius) {
    this.radius = radius;
    this.draw = function () { console.log('draw called'); }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);
console.log(another);