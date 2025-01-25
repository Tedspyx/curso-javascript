// For loop


// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let pares = [];
// let impares = [];
// for(let i = 0; i < 10; i++) {
//    if(i % 2 == 0){
//     pares.push(i);
//    }else if(i % 2 !==0){
//     impares.push(i);
//    }
// }
// console.log("Numeros pares", pares);
// console.log("Numeros impares", impares);

// for (let i = 0; i < 10; i++){
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     }else{
//         console.log(`El numero ${i} es impar`)
//     }
// }

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

// for( let i = 0; i < carrito.length; i++){
//     console.log(carrito[i].nombre);
// }


// While loop

// let i = 0;
// while(i < 10){
//     if(i % 2 ===0){
//         console.log(`El numero ${i} es par.`);        
//     }else{
//         console.log(`El numero ${i} es impar.`);
//     }
//     i ++;  
// }

// let i = 0;
// while(i < carrito.length){
//     console.log(carrito[i]);
//     i++;
// }
let i = 0;
do{
    console.log(i);
    i++;
}while(i < 10);