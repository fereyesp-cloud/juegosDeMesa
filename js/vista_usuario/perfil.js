// Obtener usuario activo
const usuarioPerfil = JSON.parse(sessionStorage.getItem('usuarioActivo'));

// Si no hay sesión redirigir al login
if (!usuarioPerfil) {
    window.location.href = '../login.html';
}

// Mostrar datos en el formulario
document.getElementById('nombre').value = usuarioPerfil.nombre;
document.getElementById('nombre-usuario').value = usuarioPerfil.nombreUsuario;
document.getElementById('correo').value = usuarioPerfil.correo;
document.getElementById('fechaNacimiento').value = usuarioPerfil.fecha;

document.getElementById('formulario-perfil').addEventListener('submit', function(e) {

    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let nombreUsuario = document.getElementById('nombre-usuario').value;
    let correo = document.getElementById('correo').value;
    let fecha = document.getElementById('fechaNacimiento').value;

    //Se actualiza el usuario en el localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let index = usuarios .findIndex(u => u.nombreUsuario === usuarioPerfil.nombreUsuario);

    if(index !== -1){
        usuarios[index].nombre = nombre;
        usuarios[index].nombreUsuario = nombreUsuario;
        usuarios[index].correo = correo;
        usuarios[index].fecha = fecha;

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarios[index]));

        let modal = new bootstrap.Modal(document.getElementById('modalEditar-perfil'));
        modal.show();
    }
})

document.getElementById('btn-aceptar-modal-perfil').addEventListener('click', function() {
    window.location.href = '../index.html';
});