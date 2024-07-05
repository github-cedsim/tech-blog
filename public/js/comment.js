const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text').value.trim();
    const postId = document.querySelector('#post-id').value.trim();

    if (commentText && postId) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ commentText, postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
