setTimeout(() => {
    const commentsBtns = document.querySelectorAll('.comments');

    commentsBtns.forEach((commentsBtn) => {
        commentsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = e.target.getAttribute('data-post-id');
            console.log('postId: ', postId);
            window.location.replace(`/comments/${postId}`);
        });
    });
}, 1000);
