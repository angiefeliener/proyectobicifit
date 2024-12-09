document.addEventListener('DOMContentLoaded', () => {
    const accesorios = [
        { id: 1, nombre: "Casco CLIFF", precio: 50.00, imagen: "/imagenes/casco1.png" },
        { id: 2, nombre: "Casco GW-MANTIS", precio: 25.00, imagen: "/imagenes/casco2.png" },
        { id: 3, nombre: "Casco ONTRAIL-ARMOR", precio: 15.00, imagen: "/imagenes/CASCO3.png" },
        { id: 4, nombre: "Casco ONTRAIL_MANTIS", precio: 75.00, imagen: "/imagenes/casco4.png" },
        { id: 5, nombre: "Casco ONTRAIL-TRION", precio: 10.00, imagen: "/imagenes/casco5.png" },
        { id: 6, nombre: "Casco GW- DRAGOFLY", precio: 120.00, imagen: "/imagenes/casco6.png" },
    ];

    const listaAccesorios = document.getElementById('lista-accesorios');
    const buscarAccesorios = document.getElementById('buscar-accesorios');

    const renderAccesorios = (filtro = "") => {
        listaAccesorios.innerHTML = "";
        const accesoriosFiltrados = accesorios.filter(accesorio =>
            accesorio.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

        accesoriosFiltrados.forEach(accesorio => {
            const div = document.createElement('div');
            div.classList.add('accesorio');
            div.innerHTML = `
                <img src="${accesorio.imagen}" alt="${accesorio.nombre}">
                <h3>${accesorio.nombre}</h3>
                <p>Precio: $${accesorio.precio.toFixed(2)}</p>
                <button onclick="agregarAlCarrito('${accesorio.nombre}', ${accesorio.precio})">Agregar al carrito</button>
            `;
            listaAccesorios.appendChild(div);
        });
    };

    buscarAccesorios.addEventListener('input', (e) => {
        renderAccesorios(e.target.value);
    });

    renderAccesorios();

    // Simula agregar al carrito (puedes conectarlo con el carrito real)
    window.agregarAlCarrito = (nombre, precio) => {
        alert(nombre + " ha sido agregado al carrito.");

    };
});