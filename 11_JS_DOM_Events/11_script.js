// change Text
let changeText = (message,color) => {
    let h2Tag = document.querySelector('#msg');
    h2Tag.innerText = message;
    h2Tag.style.backgroundColor = color;
    h2Tag.style.color = 'white';
    h2Tag.style.textAlign = 'center';
    h2Tag.style.padding = '10px';
    h2Tag.style.boxShadow = '0 0 10px black';
};

// change Image
let changeImage = (imageName) => {
    let imgTag = document.querySelector('#image');
    imgTag.setAttribute('src',`../img/${imageName}`);
};

// JS DOM Event Listeners

// 1) Get the HTML element for Events
let gmButton = document.querySelector('#gm');

// 2) Add an event listener for that html element
gmButton.addEventListener('click',function() {
    // 3) apply the functionality
    displayText('Good Morning','green');
});


// Good Afternoon
let gaButton = document.querySelector('#ga');
gaButton.addEventListener('click',function() {
   displayText('Good Afternoon','orangered');
});

// Good Evening
let geButton = document.querySelector('#ge');
geButton.addEventListener('click',function() {
    displayText('Good Evening','blue');
});

// Good Night
let gnButton = document.querySelector('#gn');
gnButton.addEventListener('click',function() {
    displayText('Good Night','purple');
});

// change Text
let displayText = (message,color) => {
    let h2Tag = document.querySelector('#display');
    h2Tag.innerText = message;
    h2Tag.style.backgroundColor = color;
    h2Tag.style.color = 'white';
    h2Tag.style.textAlign = 'center';
    h2Tag.style.padding = '10px';
    h2Tag.style.boxShadow = '0 0 10px black';
};

