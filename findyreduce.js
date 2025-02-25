const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 75 }
];

const buscarProducto = (nombreProducto) => {
    return productos.find(producto => producto.nombre === nombreProducto);
};

const productoEncontrado = buscarProducto("Teclado");
console.log("Producto encontrado:", productoEncontrado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);

console.log("Total de la compra:", totalCompra);