// Rules of variable / identifier Declaration
// ------------------------------
// 1) a-z , A - Z , 0 - 9 , $ , _
// 2) must not starts with a number
// 3) must not starts with CAPS
// 4) JS is case sensitive
// 5) must not re-declare the same variable
// 6) max 15 character length
// 7) Use camel case letter for more words

// 1)
let name1 = 'john';
console.log(name1);

// variable declaration
let num1 = 100;
let num2 = 200;
let sum = num1 + num2;
console.log("The Sum of " +  num1 + " , " + num2 + " is : " + sum);

console.log(`The Sum of ${num1} , ${num2} is: ${sum}`);