// Object Creation
let person = {
    name : 'Rajan',
    age : 23,
    desg : 'Software Engineer',
    company : 'Deloitte'
};

// Access the Object
console.log(person);

// Access the properties of an object
console.log(`Name : ${person.name}`);
console.log(`Age : ${person.age}`);

// Add Extra properties to an Object
console.log(person);
person.salary = '25000';
person.married = false;
console.log(person);

// Change the existing property of an object
person.desg = 'Sr. Software Engineer';
person.age = 25;
console.log(person);

// Delete a property from an Object
delete person.married;
console.log(person);

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 25,
    course : 'Medical',
    college : 'Osmania Medical College',
    address : {
        flat : 425,
        location : 'Jubliee Hills',
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// Access the nested objects data
console.log(`Student Location : ${student.address.location}`);

// Modify the properties data
console.log(student.address);
student.address.location = 'Banjara Hills';
console.log(student.address);

