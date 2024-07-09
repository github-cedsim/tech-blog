document.addEventListener('DOMContentLoaded', () => {
  const newPostForm = document.querySelector('#new-post-form');
  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();

      if (title && content) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to create post');
        }
      }
    });
  }

  const editButtons = document.querySelectorAll('.edit-post-btn');
  editButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');
      const newTitle = prompt('Enter new title');
      const newContent = prompt('Enter new content');

      if (newTitle && newContent) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title: newTitle, content: newContent }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to update post');
        }
      }
    });
  });

  const deleteButtons = document.querySelectorAll('.delete-post-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete post');
      }
    });
  });
});