// 1. Primero declarar usuarios
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// 2. Crear admin si no existe
let adminExiste = usuarios.find(u => u.nombreUsuario === 'admin');

if (!adminExiste) {
    usuarios.push({
        nombre: 'Administrador',
        nombreUsuario: 'admin',
        correo: 'admin@tuturno.cl',
        contrasena: 'Admin123!',
        fecha: '1990-01-01',
        rol: 'admin'
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// 3. Luego el resto del código
let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo'));

if (usuarioActivo) {
    document.getElementById('usuario-activo').textContent = '👤 ' + usuarioActivo.nombreUsuario;
    document.getElementById('li-cerrar-sesion').style.display = 'block';
    document.getElementById('li-perfil').style.display = 'block';
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-registro').style.display = 'none';

    // Redirigir admin al dashboard si está en index
    if (usuarioActivo.rol === 'admin' && window.location.pathname.endsWith('index.html')) {
        window.location.href = 'vista_admin/dashboard.html';
    }
}

document.getElementById('btn-cerrar-sesion').addEventListener('click', function() {
    sessionStorage.removeItem('usuarioActivo');
    
    
    if (window.location.pathname.includes('vista_usuario') || 
        window.location.pathname.includes('vista_admin')) {
        window.location.href = '../index.html';
    } else {
        window.location.href = 'index.html';
    }
});