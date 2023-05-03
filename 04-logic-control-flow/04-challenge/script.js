<<<<<<< HEAD
// Using if-else method - SOLUTION 1

function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
    else {
        return 'Error: Invalid Operator';
    }
};

console.log(calculator(10, 3, '+'), Boolean(calculator)); 
console.log(calculator(10, 3, '-')); 
console.log(calculator(10, 3, '*')); 
console.log(calculator(10, 3, '/')); 
console.log(calculator(10, 3, '%'));

// Using Switch Case - SOLUTION 2

const calculator2 = (num1, num2, operator) => {
    switch (operator) {
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default:
            return 'Error: Invalid Operator';
    }
};
           
console.log(calculator2(5, 2, '+'));
console.log(calculator2(5, 2, '-'));
console.log(calculator2(5, 2, '*'));
console.log(calculator2(5, 2, '/'));
console.log(calculator2(5, 2, '&'));
=======
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  console.log(result);
  return result;
}

calculator(3, 4, '*'); // returns 12
>>>>>>> upstream/master
