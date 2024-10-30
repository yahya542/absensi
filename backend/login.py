from flask import Flask, request, redirect, render_template, flash
import mysql.connector
import bcrypt

app = Flask(__name__, template_folder="../frontend" , static_folder="../frontend")
app.secret_key = 'your_secret_key'  # Ganti dengan kunci rahasia Anda
# Koneksi ke database MySQL
def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='YAHYA',  # Ganti dengan username MySQL Anda
        password='Deya2501',  # Ganti dengan password MySQL Anda
        database='login_db'  # Ganti dengan nama database Anda
    )

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='MAKDUM',  # Ganti dengan username MySQL Anda
        password='mkdm11111',  # Ganti dengan password MySQL Anda
        database='login_db'  # Ganti dengan nama database Anda
    )

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='DIMAS',  # Ganti dengan username MySQL Anda
        password='dimas22222',  # Ganti dengan password MySQL Anda
        database='login_db'  # Ganti dengan nama database Anda
    )

password = "DEYA2501"
hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
print(hashed_password)

password = "mkdm11111"
hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
print(hashed_password)

password = "dimas22222"
hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
print(hashed_password)


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == "POST" :
        username = request.form['username']
        npm = request.form['npm']
        password = request.form['password']
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE username = %s AND npm = %s", (username, npm))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        if user and bcrypt.checkpw(password.encode('utf-8'), user[0].encode('utf-8')):
            return redirect('/dashboard')  # Arahkan ke dashboard
        else:
            flash('Username, NPM, atau password salah.')
            return redirect('/')  # Kembali ke halaman login
    elif request.method == "GET" : 
        return render_template ("login.html") 
        
    

@app.route('/dashboard')
def dashboard():
    return render_template ("dashboard.html")

if __name__ == '__main__':
    app.run(debug=True)
