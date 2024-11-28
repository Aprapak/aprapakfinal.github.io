// Form Validation and Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form inputs
    if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission process
    alert('Thank you for contacting me! Your message has been successfully sent.');
    contactForm.reset(); // Clear form inputs
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
    return emailRegex.test(email);
}

// Form Accessibility Feedback
contactForm.addEventListener('reset', function () {
    alert('The form has been cleared.');
});

// LinkedIn Button Click Handler
const linkedInButton = document.getElementById('linkedinButton');

if (linkedInButton) {
    linkedInButton.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/aathithyan-prapakaran-391294224/', '_blank');
    });
}

// Provide Accessible Focus Feedback
const formElements = contactForm.querySelectorAll('input, textarea, select');

formElements.forEach(element => {
    element.addEventListener('focus', function () {
        element.style.outline = '3px solid #0073e6'; // Highlight focus
    });

    element.addEventListener('blur', function () {
        element.style.outline = 'none';
    });
});
