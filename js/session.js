let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo'));

if (usuarioActivo) {
    document.getElementById('usuario-activo').textContent = '👤 ' + usuarioActivo.nombreUsuario;
    document.getElementById('li-cerrar-sesion').style.display = 'block';
    document.getElementById('li-perfil').style.display = 'block';
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-registro').style.display = 'none';
} else {
    // Ocultar cerrar sesión cuando no hay sesión
    document.getElementById('btn-cerrar-sesion').style.display = 'none';
}

document.getElementById('btn-cerrar-sesion').addEventListener('click', function() {
    sessionStorage.removeItem('usuarioActivo');
    window.location.href = 'index.html'; 
});