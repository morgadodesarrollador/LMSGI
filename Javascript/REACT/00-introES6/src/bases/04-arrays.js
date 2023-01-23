
//arreglo vacio. Es Dinámico
const arreglo = new Array();
const arreglo3 = [];

//arreglo inicializado en 100 posiciones pero es dinámico
const arreglo1 = new Array(100);

const numeros = [];
numeros.push(1);
// console.log(datos)

const datos = [1,2,3,4];
let datos2 = datos;
datos2.push(5);

let datos3 = [ ...datos, 5];
console.log(datos, datos2);

//a la función se le llama callback
//la función se ejecuta por cada uno de los elementos que haya en el array
//y retorna un valor que se añade al array
let dobles = datos2.map( function(valor){
    return valor*2
})

let triples = datos2.map((valor) => {
    return valor*3
} );
let por5 = datos2.map((valor) => (valor*5)) ;


console.log(dobles)
console.log(triples)
console.log(por5)
