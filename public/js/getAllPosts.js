fetch('/posts/', { method: 'GET' })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        data.forEach((post) => {
            // Create the new post element
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            // Create the top-down section
            const topDownElement = document.createElement('div');
            topDownElement.classList.add('top-down');
            postElement.appendChild(topDownElement);

            const upVoteButton = document.createElement('button');
            upVoteButton.setAttribute('id', 'up-vote');
            topDownElement.appendChild(upVoteButton);

            const upVoteImg = document.createElement('img');
            upVoteImg.setAttribute('src', '../assets/arrow-up.png');
            upVoteImg.setAttribute('alt', 'Top');
            upVoteButton.appendChild(upVoteImg);

            const votesCountElement = document.createElement('p');
            votesCountElement.textContent = '10';
            topDownElement.appendChild(votesCountElement);

            const downVoteButton = document.createElement('button');
            topDownElement.appendChild(downVoteButton);

            const downVoteImg = document.createElement('img');
            downVoteImg.setAttribute('src', '../assets/arrow-up.png');
            downVoteImg.setAttribute('alt', 'down');
            downVoteImg.classList.add('rotate');
            downVoteButton.appendChild(downVoteImg);

            // Create the main-post section
            const mainPostElement = document.createElement('div');
            mainPostElement.classList.add('main-post');
            postElement.appendChild(mainPostElement);

            const postInfoElement = document.createElement('div');
            postInfoElement.classList.add('post-info');
            mainPostElement.appendChild(postInfoElement);

            const userInfoElement = document.createElement('div');
            userInfoElement.classList.add('user-info');
            postInfoElement.appendChild(userInfoElement);

            const posterImgElement = document.createElement('img');
            posterImgElement.classList.add('poster-img');
            posterImgElement.setAttribute('src', '../assets/user-img.png');
            posterImgElement.setAttribute('alt', 'Info Image');
            userInfoElement.appendChild(posterImgElement);

            const posterNameElement = document.createElement('h2');
            posterNameElement.classList.add('poster-name');
            posterNameElement.textContent = post.username;
            userInfoElement.appendChild(posterNameElement);

            const postTimeElement = document.createElement('span');
            postTimeElement.classList.add('post-time');
            postTimeElement.textContent = post.created_at;
            userInfoElement.appendChild(postTimeElement);

            const postBodyElement = document.createElement('div');
            postBodyElement.classList.add('post-body');
            mainPostElement.appendChild(postBodyElement);

            const postBodyTextElement = document.createElement('p');
            postBodyTextElement.textContent = post.content;
            postBodyElement.appendChild(postBodyTextElement);

            const postImgElement = document.createElement('div');
            postImgElement.classList.add('post-img');
            mainPostElement.appendChild(postImgElement);

            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', post.image);
            imgElement.setAttribute('alt', '');
            postImgElement.appendChild(imgElement);

            const postFooterElement = document.createElement('div');
            postFooterElement.classList.add('post-footer');
            mainPostElement.appendChild(postFooterElement);

            const commentsButtonElement = document.createElement('button');
            commentsButtonElement.classList.add('comments');
            commentsButtonElement.textContent = 'Comments';
            postFooterElement.appendChild(commentsButtonElement);

            const shareButtonElement = document.createElement('button');
            shareButtonElement.classList.add('share');
            shareButtonElement.textContent = 'share';
            postFooterElement.appendChild(shareButtonElement);

            const saveButtonElement = document.createElement('button');
            saveButtonElement.classList.add('save');
            saveButtonElement.textContent = 'save';
            postFooterElement.appendChild(saveButtonElement);

            // Append the post element to the "posts-container" div
            const postsContainer = document.querySelector('.posts-container');
            postsContainer.appendChild(postElement);
        });
    })
    .catch((err) => console.log(err));
