document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const checkButton = document.getElementById('checkButton');

    checkButton.addEventListener('click', function() {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;
        let valid = true;

   
        if (password.length < 8) {
            passwordError.classList.remove('hidden');
            valid = false;
        } else {
            passwordError.classList.add('hidden');
        }

       
        if (password !== confirmPassword) {
            confirmPasswordError.classList.remove('hidden');
            valid = false;
        } else {
            confirmPasswordError.classList.add('hidden');
        }

        
        if (valid) {
            alert('Password is valid and matches confirmation.');
        }
    });
});
