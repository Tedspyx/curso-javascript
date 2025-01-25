// Classes

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

}
const producto2 = new Producto('Monitor Curvo de 49"',800);
const producto3 = new Producto('Laptop"',700);

console.log(producto3);

//Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '31289371');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());

// class Precio{
//     constructor(precio){
//         this.precio = precio;
//     }
//     formatearPrecios(){
//         return `El valor total de los productos es de ${this.precio} `
//     }
// }


// const precios = new Precio([producto2.precio + producto3.precio]);
// console.log(precios.formatearPrecios());
