const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach si se va a mostrar en pantallla

carrito.forEach(producto => console.log(producto));

//map se usa mas si se va a crear un arreglo mas
const arreglo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo);