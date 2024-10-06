document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
    const response = await fetch('/.netlify/functions/contact.js', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    console.log(response);
    
    if (response.ok) {
      alert('Your message has been sent!');
      form.reset(); // Optionally reset the form
    } else {
      alert('Failed to send your message.');
    }
    
    } catch (error) {
    console.error('Error:', error);
    alert('An error occurred.');
    }
    });