
console.log ('Cargando app.js');
const iva = 0.16;

let pcoste = 2000;
calcularPVP(pcoste, iva);
console.log ('---------- Producto 1 -------');
console.log ('Precio de Coste = ', pcoste, ' €');
console.log (' el iva es = ', iva * 100, '%', '-->', pcoste*iva);
console.log ('PVP = ', pcoste * (1 + iva), ' €');
console.log ('---------- Producto 2 -------');
pcoste = 1000;
console.log ('Precio de Coste = ', pcoste, ' €');
console.log ('el iva es= ', iva * 100, '%', '-->', pcoste*iva);
console.log ('PVP = ', pcoste * (1 + iva), ' €');
console.log ('---------- Producto 3 -------');
pcoste = 500;
console.log ('Precio de Coste = ', pcoste, ' €');
console.log ('iva = ', iva * 100, '%', '-->', pcoste*iva);
console.log ('PVP = ', pcoste * (1 + iva), ' €');

console.log ('---------- Producto 4 -------');
pcoste = 100;
console.log ('Precio de Coste = ', pcoste, ' €');
console.log ('iva = ', iva * 100, '%', '-->', pcoste*iva);
console.log ('PVP = ', pcoste * (1 + iva), ' €');

function calcularPVP(precio, impuesto){
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');

}