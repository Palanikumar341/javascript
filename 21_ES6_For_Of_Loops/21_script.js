let colors = ['white','black','purple','red','blue'];

// Normal for loop
let output = '';
for(let i=0; i<colors.length; i++){
    output += `${colors[i].toUpperCase()} `;
}
console.log(output);

// for-in loop ES5
output = '';
for(let index in colors){
    output += `${colors[index].toUpperCase()} `;
}
console.log(output);

// for-of Loop ES6
output = '';
for(let color of colors){
    output += `${color.toUpperCase()} `;
}
console.log(output);

// for Each Function ES5
output = '';
colors.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// for Each with Arrow Function ES5
output = '';
colors.forEach(color => output += `${color.toUpperCase()}`);
console.log(output);