document.getElementById('Login').addEventListener('submit', function(e) {
    e.preventDefault();
    validarLogin();
})

document.getElementById('btn-ver-contrasena-login').addEventListener('click', function() {
    let input = document.getElementById('contrasena-login');
    input.type = input.type === 'password' ? 'text' : 'password'
})

function validarLogin() {
    let usuario = document.getElementById('username-login').value;
    let contrasena = document.getElementById('contrasena-login').value;

    if(usuario == '') {
        document.getElementById('username-login').classList.add('is-invalid')
        document.getElementById('error-login').textContent = 'El usuario es obligatorio'
    } else {
        document.getElementById('username-login').classList.remove('is-invalid');
    }

    if(contrasena === '') {
        document.getElementById('contrasena-login').classList.add('is-invalid')
        document.getElementById('error-contrasena-login').textContent = 'La contraseña es obligatorio'
    } else {
        document.getElementById('contrasena-login').classList.remove('is-invalid');
    }
}