# Calculator Challenge

**Instructions:**

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

**Example:**

```
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message
```

**Hint:**

- You can use an if statement for the operator, but this is also a good example for using a switch statement.

<details>
<summary>Click for Solution</summary>

### Solution 1

#### If-Else Method

```js


// Using if-else method - SOLUTION 1

function calculator(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    else if (operator == '-') {
        return num1 - num2;
    }
    else if (operator == '*') {
        return num1 * num2;
    }
    else if (operator == '/') {
        return num1 / num2;
    }
    else {
        return 'Error';
    }
};

console.log(calculator(10, 3, '+')); 
console.log(calculator(10, 3, '-')); 
console.log(calculator(10, 3, '*')); 
console.log(calculator(10, 3, '/')); 
console.log(calculator(10, 3, '%'));

```

### Solution 2

#### Switch Case Method

```js

// Using Switch Case - SOLUTION 2

function calculator2(num1, num2, operator) {
    switch (operator) {
        case '+' :
            return num1 + num2;
            break;
            case '-' :
                return num1 - num2;
                break;
            case '*' :
                return num1 * num2;
                break;
            case '/' :
                return num1 / num2;
                break;
                default:
                    return 'Error';
                    break;
                }
            }
           
console.log(calculator2(5, 2, '+'));
console.log(calculator2(5, 2, '-'));
console.log(calculator2(5, 2, '*'));
console.log(calculator2(5, 2, '/'));
console.log(calculator2(5, 2, '&'));

```


</details>



