const newFormHandler = async (event) => {
    event.preventDefault();
  
    
    const blog_title = document.querySelector('#blog-blog_title').value.trim();
    const desc = document.querySelector('#blog-desc').value.trim();
  
    if (desc && blog_title) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ desc, blogDesc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  document.querySelector('.post-form').addEventListener('submit', newFormHandler);
  document.querySelector('#postBtn').addEventListener('submit', newFormHandler);
  
  document.querySelector('.delete').addEventListener('submit', delButtonHandler);
  