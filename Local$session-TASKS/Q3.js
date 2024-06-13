
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { firstName, lastName, email, password };

   
    localStorage.setItem('user', JSON.stringify(user));

   
    document.getElementById('registrationForm').reset();


    document.getElementById('message').textContent = 'Registration successful!';
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        if (storedUser.email === loginEmail && storedUser.password === loginPassword) {
            document.getElementById('message').textContent = 'Login successful!';
        } else {
            document.getElementById('message').textContent = 'Invalid email or password.';
        }
    } else {
        document.getElementById('message').textContent = 'No registered user found.';
    }

   
    document.getElementById('loginForm').reset();
});
// window.localStorage.clear();