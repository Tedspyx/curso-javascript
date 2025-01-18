"use strict"; // correr JS en modo estricto

// obejtos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
// Object.seal(producto);//seal permite modificar  existentes pero no crear nuevo
Object.freeze(producto); // freeze no permite que el objeto sea modificado
producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);