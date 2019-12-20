let startButton = document.querySelector('#start-btn');
let counterDiv = document.querySelector('#counter');
let count = 0;
let interval = 0;
startButton.addEventListener('click',function() {
    interval = setInterval(addCount,100);
});

// addCount
let addCount = () => {

    if(count <= 100){
        counterDiv.innerHTML = `<p>${count} %</p>`;
    }
    else{
        counterDiv.innerHTML = `<p>Over</p>`;
        clearInterval(interval);
    }
    changeColor(count);
    count++;
};

// change color
let changeColor = (count) => {
    console.log(count);
    let number = 2.55 * count;
    counterDiv.style.background = `linear-gradient(45deg,black,rgb(${number},0,${number}))`;
};