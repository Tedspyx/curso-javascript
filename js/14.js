// Arreglos o Arrays

const numeros = [10,20,30,40,50];




// const arreglo = ["Hola", 10,true, "si", null, {nombre:"Alejo", trabajo: "Programador"}, [1,2,3]];

// console.log(arreglo);

//Acceder a los valores de un arreglo
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[200]);

//Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero){
//     console.log(numero);
// })

// numeros[5] = 60; // manera no tan comun de agregar elementos al array


numeros.push(60,70); //push agrega al final
console.table(numeros);

numeros.unshift(-10,-20,-30); //unshsift agrega al inicio
console.table(numeros);

//eliminar 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// meses.pop(); //pop elimina ultimo elemento del areglo
// meses.shift(); // shift elimina el primero

meses.splice(2,1); // primer valor es q posicion del array quiero quitar, el segundo valor es para cuantos elementos quiero eliminar despues de esa posicion
console.table(meses);

// resst operator o Spread operator

const nuevoArreglo = [...meses, 'Junio']; //agrega finnal
const nuevoArreglo2 = ['Junio',...meses]; //agrega inicio
console.log(nuevoArreglo);
