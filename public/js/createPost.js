const contentInput = document.getElementById('post-input');
const urlImageInput = document.getElementById('img-url');

fetch('/users/') // this fetch is to get the current user info
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then((user) => {
        const userId = user.id;
        const createPost = document.querySelector('.postBtn');
        createPost.addEventListener('click', (event) => {
            event.preventDefault();
            const content = contentInput.value;
            const urlImage = urlImageInput.value;
            fetch('/posts/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: content,
                    urlImage: urlImage,
                    userId: userId,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then((data) => {
                    window.location.replace('/');
                })
                .catch((error) => {
                    console.error(
                        'There has been a problem with your fetch operation:',
                        error,
                    );
                });
        });
    });
