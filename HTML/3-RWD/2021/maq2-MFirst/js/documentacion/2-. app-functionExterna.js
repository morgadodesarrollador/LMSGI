
console.log ('Cargando app.js');
const iva = 0.16;

let pcoste = 2000;
//llamadas a la función
calcularPVP(pcoste, iva);
calcularPVP(1000, iva);
calcularPVP(3000, iva);
pcoste = 10;
calcularPVP(pcoste, iva);


// declarar la funcion calcularPVP
function calcularPVP(precio, impuesto){
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    console.log('--------------------------');

}