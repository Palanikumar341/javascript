/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`piValue : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(10,50,40,60,2,5,4,8948,9,98,489,489,79,87,7,94);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(10,50,40,60,2,5,4,8948,9,98,489,489,79,87,7,94);
console.log(`max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,6);
console.log(`2 ^ of  6 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.floor(Math.random() * 1000000);
console.log(random);

// Program to create a random Phone Numbers 100
let generatePhoneNumbers = () => {
    let phoneNumbers = [];
    for(let i=1; i<=100; i++){
        let tempNumber = '9844';
        let randomNumber = Math.floor(Math.random() * 1000000);
        if(randomNumber.toString().length === 6){
            tempNumber += randomNumber;
            phoneNumbers.push(tempNumber);
        }
    }
    return phoneNumbers;
};
let numbers = generatePhoneNumbers();
console.log(numbers);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let today = new Date();
console.log(today);

// Get proper date
let date = new Date().toLocaleDateString('it-IT');
console.log(date);

let time = new Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(`min Number : ${minNumber}`);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(`Max Number ${maxNumber}`);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

let num1 = 100.12;
console.log(`value : ${num1} Type : ${typeof num1}`);

let str = num1.toString();
console.log(`value : ${str} Type : ${typeof str}`);

let num2 = Number.parseFloat(str);
console.log(`value : ${num2} Type : ${typeof num2}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = "Good Morning";

console.log(msg.toUpperCase());

console.log(msg.toLowerCase());

console.log(msg.substr(0,4)); // Good

console.log(msg.substr(5)); // Morning

console.log(msg.charAt(0)); // G

console.log(msg.length); // 12

// Example 1: program to print the nof o's in the given string
let theString = 'Good Morning';
let countZeros = (str) => {
    let count = 0;
    for(let i =0; i<str.length; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(countZeros(theString));

// Example 2 : Reverse String
theString = 'Good Morning';
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseString(theString));

// Example 3 : check palindrome or not
theString = 'ABC';
let checkPalindrome = (str) => {
    return (str === reverseString(str));
};
console.log(checkPalindrome(theString));

// Example Convert to Palindrome
theString = 'ACB';
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0; i--){
        tempStr+= str.charAt(i);
    }
    return tempStr;
};
console.log(convertToPalindrome(theString));

// Example : convert to Word Number
let theNumber = '4569';
let convertWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number.parseInt(str.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};
console.log(convertWordNumber(theNumber));

// Example convert to Word Number using Array
theNumber = '4569';
let numbersArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let getWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number.parseInt(str.charAt(i));
        tempStr += ` ${numbersArray[digit]} `;
    }
    return tempStr;
};
console.log(getWordNumber(theNumber));

// Example : reverse Word Number
theNumber = '321';
let reverseWordNumber = (str) => {
   return getWordNumber(reverseString(str));
};
console.log(reverseWordNumber(theNumber));

// Example : get palindrome number
theNumber = '234';
let palindromeWordNumber = (str) => {
    return getWordNumber(convertToPalindrome(str));
};
console.log(palindromeWordNumber(theNumber));

// Example Triangle String
theString = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theString));

// Example Triangle String
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

// Example Triangle String
theString = 'NAVEEN SAGGAM';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(theString));

// Example Triangle String
theString = 'NAVEEN SAGGAM';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theString));

// Example Triangle String
theString = 'NAVEEN SAGGAM';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theString));