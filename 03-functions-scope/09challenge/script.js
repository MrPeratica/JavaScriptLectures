console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// ## Challenge 2

const minMax = arr => ({ min: Math.min(...arr), max: Math.max(...arr) });

console.log(minMax([1, 2, 3, 4, 5]));

// ## Challenge 3

(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
  })(10, 5);
  