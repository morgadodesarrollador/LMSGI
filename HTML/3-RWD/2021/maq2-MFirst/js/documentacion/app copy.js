console.log ('Cargando app.js');
const iva = 0.16;

let pcoste = 2000;
//js --> JavaScript ES6
// un varible que contiene una función
// la variable se llama calcularPVP
const calcularPVP2 = function (precio, impuesto){
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    console.log('--------------------------');
}
// la función anterior se reescribe en notación Arrow Function
const calcularPVP = (precio, impuesto) => {
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    return precio * (1 + impuesto);
}

//llamadas a la función
let ptotal = calcularPVP(pcoste, iva);
console.log (ptotal);




// Función externa --> la función se llama calcularPVP1
function calcularPVP1(precio, impuesto){
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    console.log('--------------------------');
}

