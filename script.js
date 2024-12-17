function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    
    emailError.innerText = "";
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email is required.";
        emailError.style.color = "red";
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        emailError.style.color = "red";
    }
}

function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    
    passwordError.innerText = ""; 
    
    const hasUpperCase = /[A-Z]/.test(password); 
    const hasLowerCase = /[a-z]/.test(password); 
    const hasNumber = /\d/.test(password);       
    const hasSpecialChar = /[@#$%^&+=!]/.test(password); 

    if (password === "") {
        passwordError.innerText = "Password is required.";
        passwordError.style.color = "red";
    } else if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long.";
        passwordError.style.color = "red";
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        passwordError.innerText = "Password is weak. It must contain uppercase, lowercase, number, and special character.";
        passwordError.style.color = "red";
    } else {
        passwordError.innerText = "Password is strong!";
        passwordError.style.color = "green";
    }
}

function validateForm() {
    validateEmail();
    validatePassword();

    const emailError = document.getElementById('emailError').innerText;
    const passwordError = document.getElementById('passwordError').innerText;

    if (emailError || passwordError) {
        return false; 
    }

    return true; 
}
