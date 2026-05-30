document.getElementById('formulario-registro').addEventListener('submit', function(e) {
    e.preventDefault();
    validarFormulario();
});

document.getElementById('btn-ver-contrasena').addEventListener('click', function() {
    let input = document.getElementById('Contrasena');
    input.type = input.type === 'password' ? 'text' : 'password';
});

document.getElementById('btn-ver-confirmar').addEventListener('click', function() {
    let input = document.getElementById('confirmar-contrasena');
    input.type = input.type === 'password' ? 'text' : 'password';
});

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let nombreUsuario = document.getElementById('nombre-usuario').value;
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('Contrasena').value;
    let confirmarContrasena = document.getElementById('confirmar-contrasena').value;
    let fecha = document.getElementById('fechaNacimiento').value;
    let valido = true;

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formatoContrasena = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;

    if (nombre === '') {
        document.getElementById('nombre').classList.add('is-invalid');
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio';
        valido = false;
    } else {
        document.getElementById('nombre').classList.remove('is-invalid');
    }

    if (nombreUsuario === '') {
        document.getElementById('nombre-usuario').classList.add('is-invalid');
        document.getElementById('error-nombre-usuario').textContent = 'El nombre de usuario es obligatorio';
        valido = false;
    } else {
        document.getElementById('nombre-usuario').classList.remove('is-invalid');
    }

   if (correo === '') {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('error-correo').textContent = 'El correo es obligatorio';
        valido = false;
    } else if (!formatoCorreo.test(correo)) {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('error-correo').textContent = 'El correo no tiene un formato válido';
        valido = false;
    } else {
        document.getElementById('correo').classList.remove('is-invalid');
    }

    if (contrasena === '') {
        document.getElementById('Contrasena').classList.add('is-invalid');
        document.getElementById('error-contrasena').textContent = 'La contraseña es obligatoria';
        valido = false;
    } else if (!formatoContrasena.test(contrasena)) {
        document.getElementById('Contrasena').classList.add('is-invalid');
        document.getElementById('error-contrasena').textContent = 'La contraseña debe tener entre 6 y 18 caracteres, una mayúscula y un número';
        valido = false;
    } else if (contrasena !== confirmarContrasena) {
        document.getElementById('confirmar-contrasena').classList.add('is-invalid');
        document.getElementById('error-confirmar-contrasena').textContent = 'Las contraseñas no coinciden';
        valido = false;
    } else {
        document.getElementById('Contrasena').classList.remove('is-invalid');
        document.getElementById('confirmar-contrasena').classList.remove('is-invalid');
    }

   if (fecha === '') {
        document.getElementById('fechaNacimiento').classList.add('is-invalid');
        document.getElementById('error-fecha').textContent = 'La fecha es obligatoria';
        valido = false;
    } else {
        let hoy = new Date();
        let nacimiento = new Date(fecha);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (edad < 13) {
        document.getElementById('fechaNacimiento').classList.add('is-invalid');
        document.getElementById('error-fecha').textContent = 'Debes tener al menos 13 años';
        valido = false;
    } else {
        document.getElementById('fechaNacimiento').classList.remove('is-invalid');
    }
    }

     if(valido){
        alert('¡Registro exitoso!')
    }
}