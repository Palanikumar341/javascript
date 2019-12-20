// Assignment operator =
let test = 'failed';
console.log(`Test Result : ${test}`);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);
console.log(`Mod : ${num2 % num1}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let sum = 0;
sum = sum + (a + b); // 0 + 10 + 20 => 30
sum += (a + b); // 30 + 10 + 20 => 60
console.log(sum);

// Conditional operators < , > , <= , >= , !==
let marks = 35;
if(marks <= 35){
    console.log('You fail the test');
}
else{
    console.log('You Pass the test');
}

// Unary Operator ++ , --
let x = 10;
x = x + 1; // 11
x += 1;  // 12
x++; // 13
console.log(x); // 13

// Logical operators && , ||
let inRelation = true;
let parentAgreed = false;
if(inRelation && parentAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until Parents Agreed');
}

// String Concatenation Operator (+)
let name = 'John';
let age = 40;
console.log(name + " " + age); // String Concatenation
console.log(`${name} ${age}`); // Template String

// Ternary operator (? :)
marks = 20;
(marks < 35)? console.log('You fail the test') : console.log('You Pass the test');

// Type of operator
let abc;
console.log(`value : ${abc} type : ${typeof abc}`);

abc = 10;
console.log(`value : ${abc} type : ${typeof abc}`);

abc = 'test';
console.log(`value : ${abc} type : ${typeof abc}`);

abc = false;
console.log(`value : ${abc} type : ${typeof abc}`);

abc = null;
console.log(`value : ${abc} type : ${typeof abc}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('both are NOT Equal');
}


// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('both are NOT Equal');
}
