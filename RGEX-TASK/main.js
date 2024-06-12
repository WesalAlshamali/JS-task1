document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let isValid = true;

    // Validate first name
    if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Invalid first name. Only letters are allowed.';
        isValid = false;
    }

    // Validate last name
    if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Invalid last name. Only letters are allowed.';
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, contain letters and numbers.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // You can submit the form data here using AJAX or any other method
    }
});
