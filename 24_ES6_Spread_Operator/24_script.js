let numbers = [5,45,1,78,234,24,23,423,4,2234];

let minNumber = (numbers) => {
    let min = numbers[0];
    for(let number of numbers){
        if(min > number){
            min = number;
        }
    }
    return min;
};

console.log(minNumber(numbers));

// min Number
let min = Math.min(...numbers);
console.log(`Min : ${min}`);

// Spread operator to merge two arrays
let arr1 = [10,20,30,40];
let arr2 = [...arr1, 50,60,70];
console.log(arr2);

// Spread operator to create a new copy of an array
let colors1 = ['white','red','blue','black','orange'];
//let colors2 = colors1.slice();
let colors2 = [...colors1];
colors1.splice(1);
console.log(colors2);

// Default Parameters
let greetEmployee = (name,age=20) => {
    console.log(`Hello ${name} You are ${age} Yrs Old`);
};
greetEmployee('John');
