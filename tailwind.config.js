/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Add JavaScript interactivity or dynamic features here

// Example: Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Reset the form
  } else {
    alert('Please fill out all fields.');
  }
});

