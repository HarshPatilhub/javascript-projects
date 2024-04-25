const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();

    if (validateForm()) {
        alert("Form Submitted Successfully")
        this.reset()
    }
   
});

function validateForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const cpasswordError = document.getElementById('cpasswordError');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    cpasswordError.textContent = '';

    let isValid = true;

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (cpassword.value.trim() === '') {
        cpasswordError.textContent = 'confirm Password is required';
        isValid = false;
    } else if (cpassword.value !== password.value) {
        cpasswordError.textContent = 'password do not match';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
