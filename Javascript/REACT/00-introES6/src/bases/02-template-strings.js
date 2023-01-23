
//Template String
//+ complejo concatenar string y variables
const nombre = "Jose Antonio";
const apellidos = "Morgado";
const fecha = 1972;
let anio = 2022
//"Te llamas Morgado, Jose Antonio y tienes xx años"
//sustitución de variables/expresiones

function edad( fecha ) {
    return (2022 - fecha)
}
// console.log( edad(1972 ));
// console.log( edad(2000 ));

console.log (`${ nombre }`)
let cadena = `Te llamas ${ nombre }, ${ apellidos } y tienes ${ anio-fecha + 1 } años`;
cadena = `Te llamas ${ nombre }, ${ apellidos } y tienes ${ edad(fecha) + 1 } años`;

//console.log(cadena)

const edad1 = function edad( fecha ) {
    return (2022 - fecha)
}

const edad2 = ( fecha ) => {
    return (2022 - fecha)
}

const edad = ( fecha ) => ( 2022 - fecha )
    
