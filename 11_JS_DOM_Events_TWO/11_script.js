// Select box With Options
let selectBoxOne = document.querySelector('#select-1');
let spanTagOne = document.querySelector('#span-1');

selectBoxOne.addEventListener('change',function() {
    let selectedOption = selectBoxOne.value;
    spanTagOne.innerText = selectedOption;
});

// Text box with keyup event
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
let textBox = document.querySelector('#username');
let spanTagTwo = document.querySelector('#span-2');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    spanTagTwo.innerText = reverseString(textEntered);
});

// SMS App
let textArea = document.querySelector('#text-area');
let spanTagThree = document.querySelector('#span-3');
textArea.addEventListener('keyup',function() {
   let textEnteredLength = textArea.value.length;
   spanTagThree.innerText = 100 - textEnteredLength;
});

// Change Password
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function() {
    let attribute = passwordBox.getAttribute('type');
    if(attribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
});

// Select Box with options from array
let colors = ['red','green','black','blue','orange','purple'];
let selectBoxTwo = document.querySelector('#select-2');
let options = '<option>Select a Color</option>';
for(let color of colors){
    options += `<option>${color.toUpperCase()}</option> \n`;
}
selectBoxTwo.innerHTML = options;
console.log(options);