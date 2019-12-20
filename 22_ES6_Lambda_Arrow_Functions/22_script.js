// Normal Function
function greet1(name) {
    let msg = `Iam from normal Function ${name}`;
    return msg;
}
let output = greet1('John');
console.log(output);

// Function Expression
let greet2 = function(name) {
    let msg = `Iam from Function Expression ${name}`;
    return msg;
};
output = greet2('John');
console.log(output);

// Arrow Function
let greet3 = name => {
    return `Iam from Arrow Function ${name}`;
    return msg;
};
output = greet3('John');
console.log(output);

// This keyword with arrow functions
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : () => {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());
