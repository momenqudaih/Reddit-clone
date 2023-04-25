const nav = document.querySelector('nav');
fetch('/users/')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        // throw new Error('Network response was not ok.');
    })
    .then((user) => {
        if (user) {
            window.location.replace('/');
        } else {
            // User is not logged in, so display a login button
            const regesContainer = document.createElement('div');
            regesContainer.classList.add('reges');

            const loginLink = document.createElement('a');
            loginLink.href = '/login';

            const loginButton = document.createElement('button');
            loginButton.classList.add('login');
            loginButton.textContent = 'Log In';

            loginLink.appendChild(loginButton);

            const signupLink = document.createElement('a');
            signupLink.href = '/signup';

            const signupButton = document.createElement('button');
            signupButton.classList.add('signup');
            signupButton.textContent = 'Sign Up';

            signupLink.appendChild(signupButton);

            regesContainer.appendChild(loginLink);
            regesContainer.appendChild(signupLink);

            nav.appendChild(regesContainer);
        }
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
    });
