// If-else Condition
let time = 12;
if(time >=0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter the Proper Time');
}

// Switch Statement
let number = 4;
let message = '';
switch(number){
    case 0:
        message = 'ZERO';
        break;
    case 1:
        message = 'ONE';
        break;
    case 2:
        message = 'TWO';
        break;
    case 3:
        message = 'THREE';
        break;
    case 4:
        message = 'FOUR';
        break;
    case 5:
        message = 'FIVE';
        break;
    case 6:
        message = 'SIX';
        break;
    case 7:
        message = 'SEVEN';
        break;
    case 8:
        message = 'EIGHT';
        break;
    case 9:
        message = 'NINE';
        break;
    default:
        message = 'Enter Single Digit Dude!!!';
        break;
}
console.log(message);

// For Loop to print the values 0 - 10
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// For Loop to print the values from 20 - 2 , 0 with diff 2
output = '';
for(let i = 20; i >= 0 ; i -= 2){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// For Loop to print Stars
let theNumber = 5;
output = '';
for(let i = 1 ; i <= theNumber ; i++){
    for(let j=1 ; j <= i ; j++){
        output += `*`;
    }
    output += `\n`;
}
console.log(output);



let n= 5;
output = '';
for(let i = 1 ; i <= n ; i++)
{
    for(let k=1; k<=(n-i); k++)
    {
        output += " ";
    }
    for(let j=1 ; j <= i ; j++)
    {
        output += `*`;
    }
    output += `\n`;
}
console.log(output);
















//eqitorial triangle
let rows = 5;
for(let i = 1 ; i <= rows ; i++)
{
    for(let k=1; k<=(rows-i); k++)
    {
       document.write("&nbsp;");
    }
    for(let j=1 ; j <= i ; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}


// For Loop to print numbers in sequential
theNumber = 8;
output = '';
for(let i = 1; i<= theNumber; i++){
    for(let j=1 ; j <= i ; j++){
        output += `${i}`
    }
    output += '\n';
}
console.log(output);

// For Loop to print numbers in reverse
theNumber = 8;
output = '';
for(let i = theNumber ; i >= 1; i--){
    for(let j = 1; j<=i ; j++){
        output += `${i}`;
    }
    output += `\n`;
}
console.log(output);

// For Loop to print numbers-Order
theNumber = 8;
output = '';
for(let i = 1; i<= theNumber; i++){
    for(let j=1 ; j <= i ; j++){
        output += `${j}`
    }
    output += '\n';
}
console.log(output);

// For Loop to print numbers - Desc Order
theNumber = 8;
output = '';
for(let i = theNumber ; i >= 1; i--){
    for(let j = 1; j<=i ; j++){
        output += `${j}`;
    }
    output += `\n`;
}
console.log(output);

// While Loop
console.log('------------------------ While Loop ------------------');

// While Loop to print the values 0 - 10
output = '';
let  i = 0;
while(i<=10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// While Loop to print the values from 20 - 2 , 0 with diff 2
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
console.log(output);

// While Loop to print Stars
theNumber = 5;
output = '';
i = 1;
while(i <= theNumber){
    let j = 1;
    while( j <= i){
        output += `*`;
        j++;
    }
    output += `\n`;
    i++;
}
console.log(output);

// For Loop to print numbers in sequential
theNumber = 8;
output = '';
i = 1;
while(i<= theNumber){
    let j=1;
    while(j <= i){
        output += `${i}`;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// For Loop to print numbers in reverse
theNumber = 8;
output = '';
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j<=i){
        output += `${i}`;
        j++;
    }
    output += `\n`;
    i--;
}
console.log(output);

// For Loop to print numbers-Order
theNumber = 8;
output = '';
i = 1;
while(i<= theNumber){
    let j=1;
    while(j <= i){
        output += `${j}`;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// For Loop to print numbers - Desc Order
theNumber = 8;
output = '';
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j<=i){
        output += `${j}`;
        j++;
    }
    output += `\n`;
    i--;
}
console.log(output);

// do While  Loop
console.log('--------------------------------- do While  Loop ------------------');

// do While  Loop to print the values 0 - 10
output = '';
i = 0;
do{
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
while(i<=10);
console.log(output);

// do While  Loop to print the values from 20 - 2 , 0 with diff 2
output = '';
i = 20;
do{
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
while(i >= 0);
console.log(output);

// do While  Loop to print Stars
theNumber = 5;
output = '';
i = 1;
do{
    let j = 1;
    do{
        output += `*`;
        j++;
    }
    while( j <= i);
    output += `\n`;
    i++;
}
while(i <= theNumber);
console.log(output);

// do While  Loop to print numbers in sequential
theNumber = 8;
output = '';
i = 1;
do{
    let j=1;
    do{
        output += `${i}`;
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= theNumber);
console.log(output);

// do While  Loop to print numbers in reverse
theNumber = 8;
output = '';
i = theNumber;
do{
    let j = 1;
    do{
        output += `${i}`;
        j++;
    }
    while(j<=i);
    output += `\n`;
    i--;
}
while(i >= 1);
console.log(output);

// do While  Loop to print numbers-Order
theNumber = 8;
output = '';
i = 1;
do{
    let j=1;
    do{
        output += `${j}`;
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= theNumber);
console.log(output);

// do While Loop to print numbers - Desc Order
theNumber = 8;
output = '';
i = theNumber;
do{
    let j = 1;
    do{
        output += `${j}`;
        j++;
    }
    while(j<=i);
    output += `\n`;
    i--;
}
while(i >= 1);
console.log(output);