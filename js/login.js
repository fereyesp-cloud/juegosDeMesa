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
    let valido = true;

    if(usuario == '') {
        document.getElementById('username-login').classList.add('is-invalid');
        document.getElementById('error-login').textContent = 'El usuario es obligatorio';
        valido = false;
    } else {
        document.getElementById('username-login').classList.remove('is-invalid');
    }

    if(contrasena === '') {
        document.getElementById('contrasena-login').classList.add('is-invalid');
        document.getElementById('error-contrasena-login').textContent = 'La contraseña es obligatorio';
        valido = false;
    } else {
        document.getElementById('contrasena-login').classList.remove('is-invalid');
    }

    if(valido){
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        let usuariosEncontrado = usuarios.find(u =>
            u.nombreUsuario === usuario && u.contrasena === contrasena
        )

        if(usuariosEncontrado) {
            sessionStorage.setItem('usuarioActivo', JSON.stringify(usuariosEncontrado));
            window.location.href = 'index.html'
        } else {
            let modal = new bootstrap.Modal(document.getElementById('modalErroneo-login'));
            modal.show();
        }
    }
}