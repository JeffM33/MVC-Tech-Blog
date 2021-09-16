const newFormHandler = async (event) => {
    event.preventDefault();
    
    //connect it to text for reply to be linked to the blog. 
    const blog_id = document.querySelector('#blog_id').value.trim();
    const text = document.querySelector('#text').value.trim();
  
    if (text) {
      const response = await fetch(`/api/blog/`, {
        method: 'POST',
        body: JSON.stringify({text}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to create reply');
      }
    }
  };

  const createButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/blog/`, {
          method: 'POST',
        });
    
        if (response.ok) {
          document.location.assign(`/api/blog`);
        } else {
          alert('');
        }
      }
    };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reply/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete reply');
      }
    }
  };