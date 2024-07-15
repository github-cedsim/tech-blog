document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const postId = window.location.pathname.split('/').pop();
      const content = document.querySelector('#comment-content').value.trim();

      if (content) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({
            post_id: postId,
            content,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to add comment');
        }
      }
    });
  }
});