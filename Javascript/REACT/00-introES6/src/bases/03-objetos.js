
// tipos báscos variables: Number (enteros, decimales), Strind, Boolean (true, false)

// objetos --> variables de tipo complejo que contienes estructuras de datos de cualquier tipo
/*
    un objeto es un tipo complejo formado por pararejas (propiedad: valor) separados por ,
*/
const persona = {
    nif: '23456745G',
    nombre: 'Juan Antonio',
    apellidos: 'Sanchez Perez',
    edad: 34,
    casado: false,
    direccion: {
        calle: 'C/La pimienta verde',
        numero: 5,
        codpostal: '04600',
        ciudad: 'Almeria',
        pais: 'España'
    },
    aficciones: ['Ciclismo', 'Natación', 'Petanca']
}
// ¡Hacer un COPIA DEL OBTJETO (DUPLICAR)
// operador SPREAD ...OBJETO    ...array

// console.log( { ...persona });
// console.log( {...persona.aficciones} );

//*** DUPLICIDAD  */
const persona3 = { ...persona };
persona3.nombre = 'Alfonso';
persona3.edad = 18;
delete(persona3.aficciones);
console.log(persona, persona3);


// const persona2 = persona; // la copia de la referencia a la que apunta persona
// persona2.nombre = 'Ana María';
// persona2.edad = 25;
// delete(persona2.aficciones);
// console.log(persona, persona2);





















//console.table(persona);
// console.log(persona);

// console.log(persona.direccion);
// console.table(persona.direccion.ciudad)
// console.log(persona.aficciones)

// console.table(persona.aficciones[0])
// console.table(persona.aficciones[1])
// console.table(persona.aficciones[2])
// console.table(persona.aficciones.length)

// console.table(persona.aficciones.length - 1)

// let ultimo = persona.aficciones.length - 1;
// console.table(persona.aficciones[ultimo])









// ' ', " ", ` `,  ( ), { },  [ ]

// console.log (persona);
// console.table(persona);
// console.log (persona.edad + 30);
