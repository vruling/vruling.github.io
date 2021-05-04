'use strict';

let A;
let B;
let op;

function inputAsking() {
 A = +prompt('Enter the first number', 5);
 B = +prompt('Enter the second number', 6);
 op = prompt('Enter operation sign', "*"); 
    while (true) {
        if (Number.isInteger(A) && Number.isInteger(B)) {
            alert("The values are correct");
            return;
        } else {
            alert("Write the correct values");
            inputAsking();
        }
    }
}
function calculator(A, B, op) {
  switch (op) {
    case '+':
      return A + B;
    case '-':
      return A - B;
    case '*':
      return A * B;
    case '/':
      return A / B;
    default:
      alert("Write only +-*/ values")
  }
}
inputAsking();
alert(calculator(A, B, op));