/* eslint-disable max-len */
const id = window.location.href.split('/').pop();
fetch(`/posts/${id}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        console.log('errorrrr');
    })
    .then((post) => {
        console.log(post);

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
        postTimeElement.textContent = getTimeSincePost(post.created_at);
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

        if (post.image) {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', post.image);
            imgElement.setAttribute('alt', 'Post Image');
            postImgElement.appendChild(imgElement);
        }

        const postFooterElement = document.createElement('div');
        postFooterElement.classList.add('post-footer');
        mainPostElement.appendChild(postFooterElement);

        const commentsButtonElement = document.createElement('button');
        commentsButtonElement.classList.add('comments');
        commentsButtonElement.setAttribute('data-post-id', post.id);
        commentsButtonElement.setAttribute('id', 'commentsBtn');
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

        //---------------------------------------------
        // Create the comments section container
        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');

        // Create the comment inputs container
        const commentInputs = document.createElement('div');
        commentInputs.classList.add('comment-inputs');

        // Create the comment input element
        const commentInput = document.createElement('input');
        commentInput.classList.add('content-input');
        commentInput.setAttribute('type', 'text');
        commentInput.setAttribute('name', 'comment');
        commentInput.setAttribute('id', 'comment');

        // Create the comment button element
        const commentButton = document.createElement('input');
        commentButton.classList.add('comment-btn');
        commentButton.setAttribute('type', 'submit');
        commentButton.setAttribute('value', 'comment');

        // Append the comment input and button elements to the comment inputs container
        commentInputs.appendChild(commentInput);
        commentInputs.appendChild(commentButton);

        // Create the comments container
        const comments = document.createElement('div');
        comments.classList.add('comments');

        // Create the comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');

        // Create the commenter info container
        const commenterInfo = document.createElement('div');
        commenterInfo.classList.add('commenter-info');

        // Create the user info container
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info', 'com');

        // Create the commenter image element
        const commenterImg = document.createElement('img');
        commenterImg.classList.add('poster-img');
        commenterImg.setAttribute('src', '../assets/user-img.png');
        commenterImg.setAttribute('alt', 'Info Image');

        // Create the commenter name element
        const commenterName = document.createElement('h2');
        commenterName.classList.add('poster-name');
        commenterName.textContent = 'momen_qudaih';

        // Create the post time element
        const postTime = document.createElement('span');
        postTime.classList.add('post-time');
        postTime.textContent = '6 min ago';

        // Append the commenter image, name, and post time elements to the user info container
        userInfo.appendChild(commenterImg);
        userInfo.appendChild(commenterName);
        userInfo.appendChild(postTime);

        // Append the user info container to the commenter info container
        commenterInfo.appendChild(userInfo);

        // Create the commenter body element
        const commenterBody = document.createElement('div');
        commenterBody.classList.add('commenter-body');
        commenterBody.textContent =
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora obcaecati laudantium natus quibusdam.';

        // Append the commenter info and body elements to the comment element
        comment.appendChild(commenterInfo);
        comment.appendChild(commenterBody);

        // Append the comment element to the comments container
        comments.appendChild(comment);

        // Append the comment inputs and comments containers to the comments section container
        commentsSection.appendChild(commentInputs);
        commentsSection.appendChild(comments);

        mainPostElement.appendChild(commentsSection);

        //---------------------------------------------

        // Append the post element to the "posts-container" div
        const postsContainer = document.querySelector('.posts-container-coms');
        // console.log(postsContainer);
        postsContainer.appendChild(postElement);
    })
    .catch((error) => {
        console.error(
            'There has been a problem with your fetch operation:',
            error,
        );
    });

// eslint-disable-next-line require-jsdoc
const getTimeSincePost = (createdAt) => {
    const postDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDiff = currentDate - postDate;

    const timeDiffSeconds = Math.floor(timeDiff / 1000);
    let finalDate;
    if (timeDiffSeconds < 60) {
        finalDate = `${timeDiffSeconds} seconds ago`;
    } else if (timeDiffSeconds < 3600) {
        const minutes = Math.floor(timeDiffSeconds / 60);
        finalDate = `${minutes} m`;
    } else if (timeDiffSeconds < 86400) {
        const hours = Math.floor(timeDiffSeconds / 3600);
        finalDate = `${hours} h`;
    } else {
        const days = Math.floor(timeDiffSeconds / 86400);
        finalDate = `${days} d`;
    }

    return finalDate;
};
