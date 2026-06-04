// 1. Primero obtener usuarios
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

// 3. Verificar sesión
let usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo'));

if (!usuarioActivo) {
    window.location.href = '../login.html';
}

if (usuarioActivo.rol !== 'admin') {
    window.location.href = '../index.html';
}

// 4. Mostrar total
document.getElementById('total-usuarios').textContent = 'Total usuarios: ' + usuarios.length;

// 5. Llenar tabla
let tablaUsuarios = document.getElementById('tabla-usuarios');

usuarios.forEach(function(usuario) {
    tablaUsuarios.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.nombreUsuario}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.rol}</td>
        </tr>
    `;
});

let productos = [
    { nombre: 'Caos en Neverwinter', precio: '$59.990', categoria: 'Juegos de Rol', imagen: '../../img/caosNeverwinter .webp' },
    { nombre: 'El Señor De Los Anillos', precio: '$59.990', categoria: 'Juegos de Rol', imagen: '../../img/señorDeAnillos .webp' },
    { nombre: 'Dungeons And Dragons', precio: '$69.990', categoria: 'Juegos de Rol', imagen: '../../img/dungeons .webp' },
    { nombre: 'Basta', precio: '$9.990', categoria: 'Juegos Familiares', imagen: '../../img/juegoBasta .webp' },
    { nombre: 'EXIT: El laberinto maldito', precio: '$39.990', categoria: 'Juegos de estrategia', imagen: '../../img/ExitLaberintoMaldito .webp'},
    { nombre: 'CATAN', precio:' $29.990', categoria: 'Juegos de estrategia', imagen: '../../img/catan .webp'},
    { nombre: 'La Tripulación: Misión Mar Profundo', precio: '$17.990', categoria: 'Juegos de estrategia', imagen: '../../img/tripulacion .webp'},
    { nombre: 'Improvisado', precio: '$17.990', categoria: 'Juegos familiares', imagen: '../../img/improvisado .webp'},
    { nombre: 'Party & Co Family', precio: '$17.990', categoria: 'Juegos familiares', imagen: '../../img/partyFamily .webp'},
    { nombre: 'Si te ríes, tomas', precio: '$14.990', categoria: 'Juegos de fiesta', imagen: '../../img/SiteReisPierdes .webp'},
    { nombre: 'Curao Volao o Weón de Cojones para Adultos', precio: '$15.990', categoria: 'Juegos de fiesta', imagen: '../../img/curaoVolao .webp'},
    { nombre: 'Mójate el potito', precio: '$12.990', categoria: 'Juegos de fiesta', imagen: '../../img/Mojate .webp'}

];

let tablaProductos = document.getElementById('tabla-productos');

productos.forEach(function(producto) {
    tablaProductos.innerHTML += `
        <tr>
            <td><img src="${producto.imagen}" height="80" width="80" style="object-fit: contain;"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.categoria}</td>
        </tr>
    `;
});

document.getElementById('cerrar-session-admin').addEventListener('click', function () {
    sessionStorage.removeItem('usuarioActivo');
    window.location.href = '../../index.html'
})