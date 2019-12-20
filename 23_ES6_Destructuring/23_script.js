let employee = {
    empName : 'Rajan',
    age : 22,
    designation : 'Software Engineer',
    company : {
        name : 'Infosys',
        campus : 'Mangalore',
        state : 'karnataka',
    }
};

// Print Employee data
let {empName , age , designation} = employee;
console.log(`EMP NAME : ${empName}
             EMP AGE : ${age}
             EMP DESG : ${designation}`);


// Print Company Data
let {name , campus } = employee.company;
console.log(`NAME : ${name}
             CAMPUS : ${campus}`);