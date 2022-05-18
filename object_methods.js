// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze(no permite nada) .seal(solo modificar los existentes)

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);