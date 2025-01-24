
// const puntaje = 1000;

// if (puntaje==1000) {
//     console.log('Puntaje es 1000');
// } else{
//     console.log('Puntaje incorrecto')
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('el usuario puede pagar');
// }else{
//     console.log('Fondos insuficientes');
// }

const rol = 'editor';
if(rol === 'Administrador'){
    console.log('Acceso a todo el sistema');

} else if(rol === "editor"){
    console.log('Eres editor, hola.');
}else{
    console.log('No tienes acceso');
}