const commentFormHandler = async function(event) {
    event.preventDefault();
    const blog_id = document.getElementById('.new-comment-form').dataset.blog_id;
    const comment_desc = document.getElementById('#comment_desc').value.trim();

    if (comment_desc) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          blog_id,
          comment_desc
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // const delButtonHandler = async (event) => {
      //   if (event.target.hasAttribute('data-id')) {
      //     const id = event.target.getAttribute('data-id');
      
      //     const response = await fetch(`/api/blogs/${id}`, {
      //       method: 'DELETE',
      //     });
      
      //     if (response.ok) {
      //       document.location.replace('/profile');
      //     } else {
      //       alert('Failed to delete blog');
      //     }
      //   }
      // };
      
      document.location.reload();
    }
  };
  document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);
  document.querySelector('#post-comment').addEventListener('submit', commentFormHandler);
  document.querySelector('#delete-comment').addEventListener('submit', delButtonHandler);
  
    