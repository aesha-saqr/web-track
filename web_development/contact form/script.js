document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validation
    if (fullName === '') {
        document.getElementById('nameError').textContent = 'Please enter your full name.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Please enter your email.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Please enter a subject.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Please enter a message.';
        isValid = false;
    }

    // Submit if valid
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});
