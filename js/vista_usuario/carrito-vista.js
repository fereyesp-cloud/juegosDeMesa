// Obtener carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = 0;

// Mostrar productos
let listaCarrito = document.getElementById('lista-carro');

if (carrito.length === 0) {
    listaCarrito.innerHTML = '<p>No hay productos en el carrito</p>';
} else {
    carrito.forEach(function(producto) {
        total += parseInt(producto.precio);
        listaCarrito.innerHTML += `
            <div class="card mb-2">
        <div class="row g-0 align-items-center">
            <div class="col-3 col-md-1">
                <img src="../${producto.imagen}" class="img-fluid p-2">
            </div>
            <div class="col-9 col-md-11">
                <div class="card-body py-2">
                    <h6 class="mb-1">${producto.nombre}</h6>
                    <p class="precio mb-0">$${parseInt(producto.precio).toLocaleString('es-CL')}</p>
                </div>
            </div>
        </div>
    </div>
        `;
    });
}

// Mostrar total
document.getElementById('total-carro').textContent = '$' + total.toLocaleString();

// Vaciar carrito
document.getElementById('btn-vaciar-carro').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    window.location.reload();
});

document.getElementById('btn-comprar').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    let modal = new bootstrap.Modal(document.getElementById('modalCompra'));
    modal.show();
});

document.getElementById('btn-aceptar-compra').addEventListener('click', function() {
    window.location.href = '../index.html';
});