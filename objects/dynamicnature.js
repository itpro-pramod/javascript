const circle={
    radius:1
};

circle.color='red';
circle.draw=function(){console.log('draw called')}

console.log(circle);
circle.draw();

delete circle.color;
delete circle.draw;

console.log(circle);