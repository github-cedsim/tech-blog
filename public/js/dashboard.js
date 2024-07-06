document.querySelector('#new-post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
});

document.querySelectorAll('.edit-post-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector(`#post-title-${id}`).value.trim();
    const content = document.querySelector(`#post-content-${id}`).value.trim();

    if (title && content) {
      fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post');
        }
      });
    }
  });
});

document.querySelectorAll('.delete-post-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');

    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    });
  });
});