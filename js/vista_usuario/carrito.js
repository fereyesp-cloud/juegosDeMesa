document.querySelectorAll('.btn-agregar-carro').forEach(function(boton) {
    boton.addEventListener('click', function(){
        let nombre = this.getAttribute('data-nombre');
        let precio = this.getAttribute('data-precio');
        let imagen = this.getAttribute('data-imagen');

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        //agregar producto al carro
        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })

        //Guardar carrito
        localStorage.setItem('carrito', JSON.stringify(carrito))
        let modal = new bootstrap.Modal(document.getElementById('modalProductoAgregado'));
        modal.show();
    })
})