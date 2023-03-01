const newFormHandler = async (event) => {
    event.preventDefault();
    
    const blog_title = document.getElementById('blog_title').value.trim();
    const desc = document.getElementById('blog-desc').value.trim();
    
    console.log('hit',blog_title, desc);
    if (desc && blog_title) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ desc, blog_title }),
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
  
  document.querySelector('#blog-form').addEventListener('submit', newFormHandler);
  document.querySelector('#postBtn').addEventListener('submit', newFormHandler);
  
  document.querySelector('#delete-blog').addEventListener('click', delButtonHandler);
  