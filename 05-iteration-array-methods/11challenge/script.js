// Challenge 1 

const people = [
    { firstName: 'John', lastName: 'Doe', email: 'john@gmail.com', phone: '111-111-1111', age: 30,},
    { firstName: 'Jane', lastName: 'Poe', email: 'jane@gmail.com', phone: '222-222-2222', age: 25,},
    { firstName: 'Bob', lastName: 'Foe', email: 'bob@gmail.com', phone: '333-333-3333', age: 45,},
    { firstName: 'Sara', lastName: 'Soe', email: 'Sara@gmail.com', phone: '444-444-4444', age: 19,},
    { firstName: 'Jose', lastName: 'Koe', email: 'jose@gmail.com', phone: '555-555-5555', age: 23,},
];

const youngPeople =  people.filter((person) => person.age <= 25).map((person) => {
    return {
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
    }
});

console.log(youngPeople);

//Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter ((number) => number > 0).reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum); //79

//Challenge 3

const words = ['coder', 'programmer', 'developer'];

//Solution 1
const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalizedWords);

//Solution 2

const words2 = ['chararat', 'mahirap', 'lakers'];
const capitalizedWords2 = [];

words2.forEach((word) => {
    if (word.charAt(0).toLowerCase === word.charAt(0).toLowerCase ){
        capitalizedWords2.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
});
console.log(capitalizedWords2);

//Solution 3 

const names = ['adas', 'drei', 'nesan'];
const capitalizedNames = [];

names.forEach((word) => capitalizedNames.push(word.charAt(0).toUpperCase() + word.slice(1)));
console.log(capitalizedNames);

// Solution 4

const names2 = ["kenneth", "mikee", "josh", "ropher"];

const uppercaseNames = names2.map(function(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(uppercaseNames);
