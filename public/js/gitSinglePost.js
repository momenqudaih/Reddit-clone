setTimeout(() => {
    const commentsBtns = document.querySelectorAll('.comments');

    commentsBtns.forEach((commentsBtn) => {
        commentsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = e.target.getAttribute('data-post-id');
            window.location.replace(`/post/${postId}`);
        });
    });
}, 1000);
