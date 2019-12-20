// let vs var in block statement
let course = 'Engineering';
if(course === 'Engineering'){
    var dept1 = 'Govt';
    let dept2 = 'Software';
}
console.log(course); // Engineering
console.log(dept1); // Govt
//console.log(dept2); // ReferenceError: dept2 is not defined

// let vs var in loop statements
for(var i=0; i<= 10; i++){

}
console.log(i); // 11

for(let j=0; j<= 10; j++){

}
// console.log(j); // ReferenceError: j is not defined

// let vs var in function scoping
let greet = () => {
    let msg1 = 'Good Morning';
    var msg2 = 'Good Evening';
};
greet();
// console.log(msg1); // ReferenceError: msg1 is not defined
// console.log(msg2); // ReferenceError: msg2 is not defined

// let vs const
const today = 'Sunday';
// today = 'Friday'; // TypeError: Assignment to constant variable
console.log(today);

// Const with Objects
const mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
mobile.color = 'Black';
console.log(mobile);

// var -> only function scoping but not block scoping and modifiable
// let -> for both function , block scoping and modifiable
// const -> for both function , block scoping but un modifiable
