const commentFormHandler = async function(event) {
    event.preventDefault();
    const blog_id = document.querySelector('.new-comment-form').dataset.blog_id;
    const comment_desc = document.querySelector('#comment_desc').value.trim();
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
      
      document.location.reload();
    }
  };
  document.querySelector('#post-comment').addEventListener('submit', commentFormHandler);
  
    