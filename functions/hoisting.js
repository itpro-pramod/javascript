
demo1(); // we can call function before declaration 
//function declaration
function demo1() {
    console.log('demo1 called');
}

demo2();// we cant call function with anonymous function expression
//Anonymous function expression
var demo2 = function () {
    console.log('demo2 called');
};
