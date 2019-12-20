// indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#india-time').innerText = time;
    document.querySelector('#india-date').innerText = date;
};
setInterval(indianWatch,1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#usa-time').innerText = time;
    document.querySelector('#usa-date').innerText = date;
};
setInterval(usaWatch,1000);

// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#china-time').innerText = time;
    document.querySelector('#china-date').innerText = date;
};
setInterval(chinaWatch,1000);