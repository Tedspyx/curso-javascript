const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
});


if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon: 'img/yo.jpeg',
        body: 'Código con Alejandro, el mejor programaador'
    })
}