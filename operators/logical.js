console.log('logical operator section start');

//Logical AND (&&)

//returns true if both the operands are true
console.log(true && true);
console.log(true && false);
console.log(false && false);

//Logical OR ( || )
//returns true if one of the operands true

let highIncome = false;
let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;
console.log('eligible ' + eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused ' + applicationRefused);