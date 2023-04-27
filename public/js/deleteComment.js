/* eslint-disable max-len */
// const postId = window.location.href.split('/').pop();

setTimeout(() => {
    const deleteCommentBtn = document.querySelectorAll('.delete-btn');
    deleteCommentBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            fetch('/comments/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    commentId: btn.getAttribute('data-comment-id'),
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('comment deleted successfully');
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then((data) => {
                    // eslint-disable-next-line no-undef
                    fetch(`/comments/${postId}`)
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                            console.log('error: in your fetch post comments');
                        })
                        .then((commentsArr) => {
                            const comments = document.querySelector(
                                '.comments-section .comments',
                            );
                            comments.textContent = '';
                            if (commentsArr.length === 0) {
                                comments.appendChild(
                                    document.createTextNode('No comments yet'),
                                );
                            }
                            commentsArr.forEach((com) => {
                                // Create the comment element
                                const comment = document.createElement('div');
                                comment.classList.add('comment');

                                // Create the commenter info container
                                const commenterInfo =
                                    document.createElement('div');
                                commenterInfo.classList.add('commenter-info');

                                // Create the user info container
                                const userInfo = document.createElement('div');
                                userInfo.classList.add('user-info', 'com');

                                // Create the commenter image element
                                const commenterImg =
                                    document.createElement('img');
                                commenterImg.classList.add('poster-img');
                                commenterImg.setAttribute(
                                    'src',
                                    '../assets/user-img.png',
                                );
                                commenterImg.setAttribute('alt', 'Info Image');

                                // Create the commenter name element
                                const commenterName =
                                    document.createElement('h2');
                                commenterName.classList.add('poster-name');
                                commenterName.textContent = com.username;

                                // Create the post time element
                                const postTime = document.createElement('span');
                                postTime.classList.add('post-time');
                                // eslint-disable-next-line no-undef
                                postTime.textContent = getTimeSincePost(
                                    com.created_at,
                                );

                                // Append the commenter image, name, and post time elements to the user info container
                                userInfo.appendChild(commenterImg);
                                userInfo.appendChild(commenterName);
                                userInfo.appendChild(postTime);

                                if (com.user_id === window.userInfo.id) {
                                    // Create delete button
                                    const deleteButton =
                                        document.createElement('span');
                                    deleteButton.classList.add('delete-btn');
                                    deleteButton.setAttribute(
                                        'data-comment-id',
                                        com.id,
                                    );
                                    // deleteButton.textContent = '';
                                    const deleteIcon =
                                        document.createElement('i');
                                    deleteIcon.classList.add(
                                        'fa-regular',
                                        'fa-trash',
                                        'deleteIcon',
                                    );
                                    // <i class="fa-regular fa-trash" style="color: #ffffff;"></i>
                                    deleteButton.appendChild(deleteIcon);
                                    userInfo.appendChild(deleteButton);
                                }

                                // Append the user info container to the commenter info container
                                commenterInfo.appendChild(userInfo);

                                // Create the commenter body element
                                const commenterBody =
                                    document.createElement('div');
                                commenterBody.classList.add('commenter-body');
                                commenterBody.textContent = com.content;

                                // Append the commenter info and body elements to the comment element
                                comment.appendChild(commenterInfo);
                                comment.appendChild(commenterBody);

                                // Append the comment element to the comments container
                                comments.appendChild(comment);

                                // console.log(comments);
                            });
                        });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        });
    });
}, 1000);
