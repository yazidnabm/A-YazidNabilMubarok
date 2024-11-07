
function findLargest(x, y) {
    if ( x > y) {
        console.log (`${x} is larger!`);
    }
    else if ( x < y) {
        console.log (`${y} Is Larger!`);
    }
    else {
        console.log(`${x} and ${y} are equal`);
    }
}
    
function printHearth() {
    console.log("<3")
}


printHearth ()
// Eksekusi Function diatas


function multiply(a, b) {
    return a*b;
}

console.log(multiply(2, 3)); // Output: 6
console.log(multiply(9, 9)); // Output: 81
console.log(multiply(5, 4)); // Output: 20
// 

let animal = "Giant Pacific Octopus";
function observe(){
let animal = "Pajama Squid";
console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
let deadlyAnimal = "Scorpionfish";
console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal)

const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna"));   