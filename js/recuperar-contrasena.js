document.getElementById('form-recuperar').addEventListener('submit', function(e) {
    e.preventDefault();
    validarCorreoRecuperar();
})

function validarCorreoRecuperar(){
    let correo = document.getElementById('recuperar-correo').value;
    let valido = true;

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === '') {
        document.getElementById('recuperar-correo').classList.add('is-invalid');
        document.getElementById('error-correo-recuperar').textContent = 'El correo es obligatorio';
        valido = false;
    }else if (!formatoCorreo.test(correo)) {
        document.getElementById('recuperar-correo').classList.add('is-invalid');
        document.getElementById('error-correo-recuperar').textContent = 'El correo no tiene un formato válido';
         valido = false;
    }else {
        document.getElementById('recuperar-correo').classList.remove('is-invalid');
    }

    if (valido) {
        alert('Se ha enviado un correo de recuperación');
    }
}