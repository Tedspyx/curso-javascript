const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario autenticado'); // El promise se cumple
    }else{
        reject('No se pudo iniciar ssesion'); // el promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch(function(error){
        console.log(error)
    })

// En los promises exissten 3 valores possibles
// Pending : No se ha cumplido pero tampoco se ha rechazado
// fulfilled: Ya se cumplió el prom ise
// Rejected : Se ha rechazado o no se pudo cumplir