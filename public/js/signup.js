const signUpButton = document.getElementById('signup-button');

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validation

    const usernameError = document.getElementById('username_error');
    if (username.trim() === '') {
        usernameError.innerHTML = 'Please enter a username';
        isValid = false;
    } else {
        usernameError.innerHTML = '';
    }

    const emailError = document.getElementById('email_error');
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.innerHTML = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.innerHTML = '';
    }

    const passwordError = document.getElementById('password_error');
    if (password.trim() === '') {
        passwordError.innerHTML = 'Please enter a password';
        isValid = false;
    } else {
        passwordError.innerHTML = '';
    }

    // Submit data if all inputs are valid
    if (isValid) {
        fetch('/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    window.location.replace('/login');
                    console.log('User signed up successfully');
                    // Do something here after the user signs up successfully
                } else {
                    console.error('Failed to sign up user');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
});
