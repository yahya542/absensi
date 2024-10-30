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



    if (username === correctUsername && npm === correctNpm && password === correctPassword) {
        window.location.href = "/dashboard"; // Arahkan ke halaman berikutnya
    } 
    else if (username === correctUsername2 && npm === correctNpm2 && password === correctPassword2){
        window.location.href = "/dashboard";
    }
    else {
        alert("Username, NPM, atau password salah. Silakan coba lagi.");
    }
}