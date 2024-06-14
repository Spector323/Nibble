function validateRegistrationForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!namePattern.test(fullName) || fullName.length <= 10) {
        alert("Полное имя должно состоять только из букв и содержать более 10 символов.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Введите корректный email адрес.");
        return false;
    }

    if (password.length <= 7) {
        alert("Пароль должен быть больше 8 символов.");
        return false;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userExists = users.some(function(user) {
        return user.email === email;
    });

    if (userExists) {
        alert("Пользователь с таким email уже существует.");
        return false;
    }

    users.push({ fullName: fullName, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация прошла успешно!");
    window.location.href = "./vhod.html";
    return false; 
}