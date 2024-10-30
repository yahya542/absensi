function validateForm() {
    var username = document.getElementById('username').value;
    var npm = document.getElementById('npm').value;
    var password = document.getElementById('password').value;

    // Contoh kredensial yang benar
    var correctUsername = "YAHYA";
    var correctNpm = "12345";
    var correctPassword = "DEYA2501";

    var correctUsername2 = "MAKDUM";
    var correctNpm2 = "11111";
    var correctPassword2 = "mkdm11111";

    var correctUsername3 = "DIMAS";
    var correctNpm3 = "22222";
    var correctPassword3 = "dimas22222";



    if (username === correctUsername && npm === correctNpm && password === correctPassword) {
        window.location.href = "/dashboard"; // Arahkan ke halaman berikutnya
    } 
    else if (username === correctUsername2 && npm === correctNpm2 && password === correctPassword2){
        window.location.href = "/dashboard";
    }
    else if (username === correctUsername3 && npm === correctNpm3 && password === correctPassword3){
        window.location.href = "/dashboard";
    }
    else {
        alert("Username, NPM, atau password salah. Silakan coba lagi.");
    }
}