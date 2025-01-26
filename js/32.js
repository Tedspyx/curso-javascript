// Async / await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los Clientes fueron descargados');
        }, 5000);

    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);

    });
}




async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();





// setTimeout(() => {
//     console.log('set timeout...')
// }, 5000);

// setInterval(() => {
//     console.log('set timeout...') // lo ejecuta cada que pase el tiempo estimado
// }, 1000);