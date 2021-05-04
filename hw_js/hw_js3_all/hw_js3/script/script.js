'use strict';

let A = +prompt('Enter the first number');
let B = +prompt('Enter the second number');
let op = prompt('Enter operation sign'); 

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
  }
}
alert(calculator(A, B, op));