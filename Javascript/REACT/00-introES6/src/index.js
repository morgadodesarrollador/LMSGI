
//Array es una variable multivaluada que contiene un conjunto/lista de valores

let valores = []; //array vacio
console.log(valores)
valores.push(2);
valores.push(45);
valores.push(67);
// valores.pop(3)
// console.log(valores)
// let edades = valores;

//el operador spread (destructuración )
// [99, ...valores, 100], { profesion: 'analista de datos', ...persona, color: 'rubio' }

let datos = [ 88, ...valores, 100, 105 ] // [ 2, 45, 67, 100, 105 s]
datos.push(99);
console.log(datos);




// forEach --> recorrer/ITERAR los elementos del array/vector/arrgle/lista

let suma = 0;

datos.forEach( ele =>  console.log (ele) );

console.log('***********')
datos.forEach( (ele) => ( console.log (ele) ));
console.log('***********')

datos.forEach( ( ele ) => {
    // suma = suma + ele;
    console.log(ele);
})


// datos.forEach(function( valor ){
//     console.log ("valor = ", valor);
//     return (valor * 2)
// })

// datos.forEach(v => {
//     console.log(v)
// })

// console.log(valores);
// console.log(datos);
// métod0s sobre arrays --> length, 

// programación estructurada
// console.log(datos.length);
// console.log(datos.push(45));

// length(valores)
// push(volore, 200);



//declaración y la inicialización del array. Son equivalentes
// const datos =  new Array();

// valores = [3,4,5];

// const valores1 = [23,45,67,89,67]
// *** TypeScript ****
// const valores3: Number[] = [4,5,6];
// const valores4: String[] = ['unio', 'batman'];
// const personas: Persona[];

