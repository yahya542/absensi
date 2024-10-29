function validateForm() {
    var username = document.getElementById('username').value;
    var npm = document.getElementById('npm').value;
    var password = document.getElementById('password').value;

    // Contoh kredensial yang benar
    var correctUsername = "YAHYA";
    var correctNpm = "12345";
    var correctPassword = "DEYA2501";

    if (username === correctUsername && npm === correctNpm && password === correctPassword) {
        window.location.href = "/dashboard"; // Arahkan ke halaman berikutnya
    } else {
        alert("Username, NPM, atau password salah. Silakan coba lagi.");
    }
}