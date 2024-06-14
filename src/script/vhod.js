function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Введите корректный email адрес.";
        errorMessage.style.display = "block";
        return false;
    }
    
    if (password.length <= 7) {
        errorMessage.textContent = "Пароль должен быть больше 8 символов.";
        errorMessage.style.display = "block";
        return false;
    }
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (!user) {
        errorMessage.textContent = "Неверный email или пароль.";
        errorMessage.style.display = "block";
        return false;
    }

    successMessage.style.display = "block";
    return false; 
}