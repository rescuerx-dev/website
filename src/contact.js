const submitBtn = document.getElementById('submit');
const errorMsg = document.querySelector('.error-msg');
document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    submitBtn.textContent = 'Submitting...'
    submitBtn.classList.toggle('submitting');
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
    const response = await fetch('https://dev-rescuerx.netlify.app/.netlify/functions/contact', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    
    if (response.ok) {
      submitBtn.textContent = 'Submitted ✔';
      submitBtn.classList.toggle('submitted');

      form.reset(); // Optionally reset the form
    } 
    
    } catch (error) {
      submitBtn.textContent = 'Submit now';
      errorMsg.classList.toggle('show');
    }
    });