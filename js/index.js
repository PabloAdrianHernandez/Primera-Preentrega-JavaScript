console.log("1era Preentrega Javascript");
console.log(" ");

/* ------ Simulación de carrito de compras ------ */

const lista_productos = "Producto n°1 - Campera piel rosa Guess - Talle: 7 - $6000" + "\n" +
                        "Producto n°2 - Zapatillas Le Coq Sportiff - Talle: 33 - $5500" + "\n" +
                        "Producto n°3 - Remera ML Cheeky - Talle: 8 - $1500" + "\n" +
                        "Producto n°4 - Campera jean Cheeky Talle: 6 - $6800" + "\n" + 
                        "Producto n°5 - Vestido estampado Mimo - Talle: L - $2700" + "\n" +
                        "Producto n°6 - Conjunto plush Cheeky - Talle: M - $4200" + "\n"

alert(lista_productos);

class Producto{
    constructor(tipo, condicion, descripcion, talle, precio) {
    this.tipo = tipo;
    this.condicion = condicion;
    this.descripcion = descripcion;
    this.talle = talle;
    this.precio = precio;
    }
}

const producto1 = new Producto("ropa", "usado", "Campera piel rosa Guess", "7", 6000);
const producto2 = new Producto("calzado", "usado", "Zapatillas Le Coq Sportiff", "33", 5500);
const producto3 = new Producto("ropa", "usado", "Remera ML Cheeky", "8", 1500);
const producto4 = new Producto("ropa", "usado", "Campera jean Cheeky", "6", 6800);
const producto5 = new Producto("ropa", "usado", "Vestido estampado Mimo", "L", 2700);
const producto6 = new Producto("ropa", "usado", "Conjunto plush Cheeky", "M", 4200);

let lista_compras = "";
let sumatoria = 0;
const recargo = 1.1;
let total = 0;

function sumar(primer_par, segundo_par) {
    return primer_par + segundo_par;
}


let entrada = prompt("Ingresar número de producto (del 1 al 6), ESC para terminar");

while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            lista_compras = sumar(lista_compras, producto1.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto1.precio);
            break;
        case "2":
            lista_compras = sumar(lista_compras, producto2.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto2.precio);
            break;
        case "3":
            lista_compras = sumar(lista_compras, producto3.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto3.precio);
            break;
        case "4":
            lista_compras = sumar(lista_compras, producto4.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto4.precio)
            break;
        case "5":
            lista_compras = sumar(lista_compras, producto5.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto5.precio);
            break;
        case "6":
            lista_compras = sumar(lista_compras, producto6.descripcion) + "\n";
            sumatoria = sumar(sumatoria, producto6.precio);
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("Ingresar número de producto (del 1 al 6), ESC para terminar");
}

alert(lista_compras);
alert("El subtotal de todos los productos seleccionados es: $" + sumatoria);

let modo_pago = prompt("Elegir modo de pago (0= efectivo/transferencia, 1= MercadoPago): ");

if (modo_pago == "0") {
    total = sumatoria;
} else if (modo_pago == "1") {
    total = parseInt(sumatoria*recargo);
} else {
    alert ("ERROR")
}

alert("El total de todos los productos seleccionados es: $" + total);

















