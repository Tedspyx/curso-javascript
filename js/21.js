// Arrow functions
const sumar2 = (a,b) => console.log(a + b);
sumar2(10,8);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // cuando solo tiene un parametro los parentesis () son opcionales y si solo es una linea de codigo los corchetes {} tambien son opcionales
aprendiendo('JavaScript');





const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado = 0;
// Some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre == 'Celular'
);

// Reduce
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// },0);

resultado = carrito.reduce((total,producto) => total + producto.precio,0);



// Filter

resultado =  carrito.filter(producto => producto.precio > 400
);

resultado = carrito.filter(producto =>  producto.nombre !== 'Celular'
);
console.log(resultado);




