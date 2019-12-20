// creation of arrays
let array  = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[1]); // 20

// Access not existed property from an array
console.log(array[5]); // undefined

// Accessing length of an Array
console.log(array.length); // 5

/*
shift() -> to remove the first element from array
unshift() -> to add the first element to array
pop() -> to remove the last element from array
push() -> to add the last element to array
slice() -> to create a new copy of tan array
sort() -> to sort an existing array elements
reverse() -> reverse the elements of an array
splice(index) -> removes all the elements from the given index
splice(index,nofelements) -> removes the no of elements from the given index
splice(index,1,replceElement) -> to replace element
join() -> to Join the Elements of an array
split() -> to split a string in to an array elements
filter() -> to filter an array using condition
find() -> to find any element from the array
indexOf() -> to find the index of element
Loop the array

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */

// Shift
console.log('----------------------- Shift ---------------- ');
let colors = ['red','blue','green','yellow','white','black'];
colors.shift(); // remove the first element
console.log(colors);

// unshift
console.log('----------------------- UnShift ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.unshift('purple'); // adds the first element
console.log(colors);

// pop
console.log('----------------------- POP ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.pop(); // remove the last element
console.log(colors);

// push
console.log('----------------------- PUSH ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.push('purple'); // add to the last element
console.log(colors);

// sort
console.log('----------------------- SORT ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.sort();
console.log(colors);


// Reverse
console.log('----------------------- REVERSE ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.reverse();
console.log(colors);

// Reverse Sort
console.log('----------------------- DESC Order ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.sort().reverse();
console.log(colors);

// Splice
console.log('----------------------- Splice ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.splice(3);
console.log(colors);

// Splice
console.log('----------------------- Splice ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.splice(0,1);
console.log(colors);

// Splice
console.log('----------------------- Splice ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
colors.splice(3,1,'purple');
console.log(colors);

// Join
console.log('----------------------- Join ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(colors);
let str = colors.join(" - ");
console.log(str);

// Split
console.log('----------------------- Join ---------------- ');
colors = ['red','blue','green','yellow','white','black'];
console.log(str);
let newColors = str.split(' - ');
console.log(newColors);

// Split Example
let employeeStr = "John 45 manager";
let empArray = employeeStr.split(' ');
console.log(empArray);

// Slice()
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// indexOf
colors = ['red','blue','green','yellow','white','black'];
console.log(colors[2]); // green
console.log(colors.indexOf('brown')); // -1

// find the element exists in the array or not
colors = ['red','blue','green','yellow','white','black'];
let color = 'green';
if(colors.indexOf(color) === -1){
    console.log(`${color} is not Exists`);
}
else{
    console.log(`${color} is exists @ index : ${colors.indexOf(color)}`);
}

// filter
let employees = [
    {
        name : 'Rajan',
        age : 23,
        salary : 20000,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Mahesh',
        age : 27,
        salary : 35000,
        designation : 'Sr. Software Engineer',
        active : false
    },
    {
        name : 'John',
        age : 35,
        salary : 65000,
        designation : 'Tech Lead',
        active : true
    },
    {
        name : 'Wilson',
        age : 40,
        salary : 85000,
        designation : 'Associate Mananger',
        active : false
    },
    {
        name : 'Laura',
        age : 50,
        salary : 150000,
        designation : 'Project Manager',
        active : true
    },
    {
        name : 'Narayan Murthy',
        age : 65,
        salary : 200000,
        designation : 'Sr. Project Manager',
        active : false
    }
];

// Filters
let juniorEmployees = employees.filter(function(employee) {
    return employee.age <= 35;
});
console.log(juniorEmployees);

let seniorEmployees = employees.filter(function(employee) {
   return employee.age > 35;
});
console.log(seniorEmployees);

let activeEmployees = employees.filter(function(employee) {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter(function(employee) {
    return !employee.active;
});
console.log(inActiveEmployees);

// find any employee
let rajan = employees.find(function(employee) {
    return employee.name === 'Rajan';
});
console.log(rajan);

// Loop the Array
let technologies = ['html','css','javascript','bootstrap','jquery'];

// Normal for loop
let output = '';
for(let i=0; i<technologies.length; i++){
   output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// for-in Loop ES5
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// for-of Loop ES6
output = '';
for(let tech of technologies){
    output += `${tech.toUpperCase()} `;
}
console.log(output);

// forEach function ES5
output = '';
technologies.forEach(function(tech) {
    output += `${tech.toUpperCase()} `;
});
console.log(output);

// forEach with Arrow Function ES6
output = '';
technologies.forEach(tech => output += `${tech.toUpperCase()} `);
console.log(output);