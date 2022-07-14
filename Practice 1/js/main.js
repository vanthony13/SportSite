var SignInButton = document.getElementsByClassName('SignIn')[0];
let btn = document.getElementById('SignIn');
console.log(btn);
console.log(SignInButton);

let header = document.getElementsByClassName('header')[0];
let LoginDiv=document.getElementById('login');

SignInButton.addEventListener('click', function() {
header.style.display = 'none';   
LoginDiv.style.display='block';
document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.912)' ;
})

let form = document.getElementById('form_login');
let email = form.elements['email'];
let password = form.elements['password'];
let userEmail = email.value
let userPassword = password.value

function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling; //the span tag we provided, receives the error message
    error.innerText = message;
    document.getElementsByTagName("i")[0].style.marginTop='18px'
    document.getElementsByTagName("i")[1].style.marginTop='17px'
    return false;
}

function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    document.getElementsByTagName("i")[0].style.marginTop='0px'
    document.getElementsByTagName("i")[1].style.marginTop='0px'
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

const requiredFields = [
    {   
        input: email,
        message: 'Email is required'
    },
    {   
        input: password,
        message: 'Password is required'
    }
  ];

  form.addEventListener('submit', (event) => {
    // check required fields
    event.preventDefault();
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
      // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
  });
  
