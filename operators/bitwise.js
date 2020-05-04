console.log('Bitwise operator section started');

//Read, Write, Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
debugger;
let myPermission = 0;

myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

