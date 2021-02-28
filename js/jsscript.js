const form = document.getElementById('form');
const username = document.getElementById('input-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('input-email');
const message = document.getElementById('input-message');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();


    if (usernameValue === '') {
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname);
    } else {
        setSuccessFor(lastname);
    }

    if (messageValue === '') {
        SetErrorFor(message);
    } else {
        SetSuccessFor(message);
    }

    if (emailValue === '') {
        setErrorFor(email);
    }
    else if(!isEmail(email)){
        alert("Your email is invalid");
        setErrorFor(email);

    }
    else {
        setSuccessFor(email);
    }

}

function setErrorFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'check error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'check success';
}

function SetErrorFor(textarea) {
    const formControl = textarea.parentElement;

    formControl.className = 'check error';

}

function SetSuccessFor(textarea) {
    const formControl = textarea.parentElement;
    formControl.className = 'check success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
