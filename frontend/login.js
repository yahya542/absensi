function validateForm() {
    let username = document.getElementById('username').value;
    let npm = document.getElementById('npm').value;
    let password = document.getElementById('password').value;

    // credentials
    let credentials = {
        mahasiswa: { npm: "12345", password: "mhs12345", role: "mahasiswa", redirectUrl: "/dashboard" },
        dosen: { npm: "12345", password: "dosen12345", role: "dosen", redirectUrl: "/dashboard_dosen" }
    };

    // Jika username, npm, dan password cocok untuk salah satu pengguna
    if (credentials[username] && credentials[username].npm === npm && credentials[username].password === password) {
        swal("Success", `Anda berhasil login sebagai ${credentials[username].role}`, "success");
        setTimeout(function () {
            window.location.href = credentials[username].redirectUrl;
        }, 2000);
    } else {
        // Semua kombinasi kesalahan yang mungkin terjadi
        if (!credentials[username] && npm !== "12345" && password !== "mhs12345" && password !== "dosen12345") {
            swal("Failed", "Username, NPM, dan Password anda salah!", "error");
        } else if (!credentials[username] && npm === "12345" && (password === "mhs12345" || password === "dosen12345")) {
            swal("Failed", "Username anda salah!", "error");
        } else if (credentials[username] && credentials[username].npm !== npm && credentials[username].password !== password) {
            swal("Failed", "NPM dan Password anda salah!", "error");
        } else if (!credentials[username] && npm !== "12345" && (password === "mhs12345" || password === "dosen12345")) {
            swal("Failed", "Username dan NPM anda salah!", "error");
        } else if (!credentials[username] && npm === "12345" && credentials[username]?.password !== password) {
            swal("Failed", "Username dan Password anda salah!", "error");
        } else if (credentials[username] && credentials[username].npm !== npm) {
            swal("Failed", "NPM anda salah!", "error");
        } else if (credentials[username] && credentials[username].password !== password) {
            swal("Failed", "Password anda salah!", "error");
        }
    }
}
