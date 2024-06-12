document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('birthDateError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('confirmEmailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('mobileError').textContent = '';

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobile = document.getElementById('mobile').value;

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    const mobileRegex = /^\d{10}$/;

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

    // Validate birth date
    if (!birthDate) {
        document.getElementById('birthDateError').textContent = 'Invalid birth date.';
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        isValid = false;
    }

    // Validate email confirmation
    if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = 'Emails do not match.';
        isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be 8-32 characters long, start with a capital letter, have at least two numbers, and one special character.';
        isValid = false;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Validate mobile number
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Invalid mobile number. It should be 10 digits.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // You can submit the form data here using AJAX or any other method
    }
});
