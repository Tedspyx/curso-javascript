// POO

//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}
// Prototype permite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"',800, true);
const producto3 = new Producto('Laptop"',700, false);




// function formatearProducto(producto){
//     return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
// }

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

