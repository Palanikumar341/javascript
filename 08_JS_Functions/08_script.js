// Declare a function
function printNumbers(fromNumber,toNumber,incre) {
    let output = '';
        for(let i=fromNumber; i<=toNumber; i+= incre){
        output += `${i} `;
    }
    console.log(output);
}
// call the function
printNumbers(10 , 10 , 100);



