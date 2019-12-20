// Promise with callback functions
let doTask = (success,failure) => {
    // doing the task
    let isDone = true;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }
};

doTask((message) => {
    console.log('SUCCESS : ' + message);
},(message) => {
    console.log('FAILURE : ' +message);
});

// Actual Promise in JavaScript
let cleanLaptop = new Promise((resolve, reject) => {
    // cleaning logic
    let isDone = true;
    if(isDone){
        resolve('Cleaning is DONE');
    }
    else{
        reject('Cleaning is NOT DONE');
    }
});

cleanLaptop.then((message) => {
    console.log(`${message}`);
}).catch((message) => {
    console.log(`${message}`);
});

// Dependent Promises in JavaScript
let doProject = new Promise((resolve, reject) => {
    // doing the Project
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing the Technical Round
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing the doManager Round
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing the HR Round
    let isDone = true;
    if(isDone){
        resolve('HR Round is Finished and GOT JOB');
    }
    else{
        reject('HR Round is NOT Finished');
    }
});

doProject.then((message) => {
    let msg = `${message} => `;
    doTechnicalRound.then((message) => {
        msg += `${message} => `;
        doManagerRound.then((message) => {
            msg += `${message} => `;
            doHRRound.then((message) => {
                msg += `${message} `;
                console.log(msg);
            }).catch((message) => {
                console.error(message);
            });
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error(message);
});