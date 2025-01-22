// declaracion de funcion
//variable reservada = no puedes crear una variable con el mismo nombre
function sumar(a,b){
    console.log(a * b);
}
sumar(5,8);

//Expresion de la funcion
const sumar2 = function(a,b){
    console.log(a - b);
}
sumar2(10,8);

// IIFE buenos para proteger que no se mezzclen las variables y funciones con los de otros archivos
(function() {
    console.log('Esto es una funcion');
})();