const myList = [
    'Lisa',
    'Lisa',
    'Kaemii',
    'Words',
    'eljae',
    'Words',
]

const myNewArray = _.uniq(myList)

console.log(myNewArray)

const number = 5;
console.log("Before", number);

const squared = number ** 2;
const remainder = number % Math.PI;

console.log("After - squared", squared);
console.log("After - remainder", remainder);
console.log("After - as money", `$${number.toFixed(2)}`);