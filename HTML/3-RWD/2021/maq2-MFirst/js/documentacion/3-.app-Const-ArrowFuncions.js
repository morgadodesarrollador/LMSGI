
console.log ('Cargando app.js');
const iva = 0.16;


// declarar la variable calcularPVP que contiene una función
const calcularPVP = (precio, impuesto) => {
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    console.log('--------------------------');
}
let calcularPVP1 = function (precio, impuesto){
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    console.log('--------------------------');
}
let pcoste = 2000;
//llamadas a la función
calcularPVP(pcoste, iva);
calcularPVP(1000, iva);
calcularPVP(3000, iva);
pcoste = 10;
calcularPVP(pcoste, iva);