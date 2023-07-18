class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1;
    }
// Creacion del producto nuevo 
    addProduct(product) {
        if (!this.codeUnico(product.code)) {
            console.warn("El código del producto ya existe. No se pudo agregar.");
            return;
        }

        product.id = this.id;
        this.id++;

        this.products.push(product);
        console.log("Producto agregado exitosamente.");
    }
// Obtencion de todos los productos existentes 
    getProducts() {
        return this.products;
    }
// Busqueda de un producto por su ID
    getElementById(id) {
        for (let product of this.products) {
            if (product.id === id) {
            console.log(product);
            return;
        }
    }
    console.error("Not found");
    }
// Verificacion de que el paramero "code" sea unico
    codeUnico(code) {
        for (let product of this.products) {
            if (product.code === code) {
            return false;
            }
        }
        return true;
    }
}



// Creacion de una instancia de ProductManager
const producto = new ProductManager();

// Agregar productos
producto.addProduct({
    title: "Epico producto 1",
    description: "Epica descripción del epico producto 1",
    price: 10.99,
    thumbnail: "epica_imagen1.jpg",
    code: "ABC123",
    stock: 12,
});

producto.addProduct({
    title: "Epico producto 2",
    description: "Epica descripción del epico producto 1",
    price: 19.99,
    thumbnail: "epica_imagen2.jpg",
    code: "XYZ456",
    stock: 5,
});

// Obtener todos los productos
const products = producto.getProducts();
console.log(products);

// Obtener un producto por ID
producto.getElementById(2);
producto.getElementById(3);