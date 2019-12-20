let a = () => {
    console.log('Iam from a function');
};

let b = (x) => {
    x();
    console.log('Iam from b function');
};

b(a);

// Actual Example of Callback
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
    return callback(a , b);
};

console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a , b) => { return a - b}));
