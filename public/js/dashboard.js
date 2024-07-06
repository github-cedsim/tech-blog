document.addEventListener('DOMContentLoaded', () => {
  const newPostForm = document.getElementById('new-post-form');

  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.getElementById('post-title').value.trim();
      const content = document.getElementById('post-content').value.trim();

      if (title && content) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          // Reload the page to see the new post
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post');
        }
      }
    });
  }
});