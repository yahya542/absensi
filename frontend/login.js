function validateForm() {
    var username = document.getElementById('username').value;
    var npm = document.getElementById('npm').value;
    var password = document.getElementById('password').value;

    // Contoh kredensial yang benar
    var correctUsername = "mahasiswa";
    var correctNpm = "12345";
    var correctPassword = "mhs12345";

    var correctUsername2 = "dosen";
    var correctNpm2 = "12345";
    var correctPassword2 = "dosen12345";

    



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