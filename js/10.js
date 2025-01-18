// objetos


const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto['precio']);


//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

//eliminar propiedades 
delete producto.disponible;
console.log(producto)