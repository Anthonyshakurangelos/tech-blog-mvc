const commentFormHandler = async function(event) {
  event.preventDefault();
      
      const blogForm = document.getElementById('new-comment-form');
      const blog_id = blogForm.getAttribute("data-blog_id");
      
  const comment_desc = document.getElementById('comment-desc').value.trim();
  
  if (comment_desc) {
    
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        //  blog_id,
        comment_desc
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // document.location.reload();
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('comment-id')) {
    const id = event.target.getAttribute('comment-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // document.location.reload();
    } else {
      alert('Delete Failed');
    }
  }
};

document
  .getElementById('new-comment-form')
  .addEventListener('submit', commentFormHandler);

  document
  .getElementById('comment-id', 'delete-comment')
  .addEventListener('submit', delButtonHandler);