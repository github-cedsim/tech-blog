document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const content = document.querySelector('#comment-content').value.trim();
      const postId = window.location.pathname.split('/')[2];

      if (content) {
        const response = await fetch(`/post/${postId}/comment`, {
          method: 'POST',
          body: JSON.stringify({ content }),
          headers: { 'Content-Type': 'application/json' },
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