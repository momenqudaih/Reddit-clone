const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.passwordInput');
const signinBtn = document.querySelector('.signinBtn');

signinBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
        }),
    }).then((response) => {
        if (response.ok) {
            // the user signed in successfully.
            window.location.replace('/');
        }
    });
});
