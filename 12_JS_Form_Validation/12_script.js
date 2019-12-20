// validateForm
let validateForm = () => {
    let isValid = validateUserName()
                    && validateEmail()
                    && validatePassword()
                    && validateConfirmPassword()
                    && validatePasswordsMatch();

    if(isValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};


// validate UserName
let validateUserName = () => {
    let usernameField = document.querySelector('#username');
    if(usernameField.value === ''){
        applyColors(usernameField);
        displayErrorMessage('UserName is Required');
        return false;
    }
    // Length Validation
    else if(usernameField.value.length < 5){
        applyColors(usernameField);
        displayErrorMessage('Required min 5 letters');
        return false;
    }
    // no special Chars
    else if(!usernameField.value.match(/^[A-Za-z0-9_]{1,32}$/)){
        applyColors(usernameField);
        displayErrorMessage('No Special Characters');
        return false;
    }
    else{
        removeColors(usernameField);
        return true;
    }
};

// validate Email
let validateEmail = () => {
    let emailField = document.querySelector('#email');
    if(emailField.value === ''){
        applyColors(emailField);
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        removeColors(emailField);
        return true;
    }
};

// validate Password
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    if(passwordField.value === ''){
        applyColors(passwordField);
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        removeColors(passwordField);
        return true;
    }
};

// validate Confirm Password
let validateConfirmPassword = () => {
    let confirmPasswordField = document.querySelector('#c_password');
    if(confirmPasswordField.value === ''){
        applyColors(confirmPasswordField);
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        removeColors(confirmPasswordField);
        return true;
    }
};

// validate Passwords Match
let validatePasswordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== confirmPasswordField.value){
        applyColors(passwordField);
        applyColors(confirmPasswordField);
        displayErrorMessage('Passwords not Matched');
        return false;
    }
    else{
        removeColors(passwordField);
        removeColors(confirmPasswordField);
        return true;
    }
};

// apply Colors
let applyColors = (inputField) => {
    inputField.style.border = '1px solid red';
    inputField.style.boxShadow = '0 0 10px red';
};

// remove Colors
let removeColors = (inputField) => {
    inputField.style.border = '1px solid green';
    inputField.style.boxShadow = '0 0 10px green';
};

// display Error Message
let displayErrorMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.style.backgroundColor = 'red';
    h3Tag.innerText = message;
    document.querySelector('#error-msg').appendChild(h3Tag);
    setTimeout(deleteErrorMessage,2000);
};

// delete Error Message
let deleteErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};