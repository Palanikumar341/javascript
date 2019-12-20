let a = 10;
let outerFunction = () => {
    let a = 20;
    let innerFunction = () => {
        let a = 30;
    };
    innerFunction();
};
outerFunction();
console.log(a);

// Closures in JavaScript
let x = 10;
let outerFn = () => {
    let y = 20;
    let innerFn = () => {
        let z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    };
    return innerFn;
};
let greet = (fName) => {
    fName();
};
let iFn = outerFn();
greet(iFn);
