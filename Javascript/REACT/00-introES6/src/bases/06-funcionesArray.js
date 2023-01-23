import { heroes } from './data/heroes';
 //snipet imp

let listaH = heroes.map((heroe) => {
    return heroe
});

console.log(listaH);

// const getHeroebyName = (nombre) => {
//     return heroes.find ( (heroe) => {
//         if (heroe.name === nombre){
//             return heroe
//         }else {
//             return false
//         }
//     })
// }
// const getHeroebyName = (id) => {
//     return heroes.find ( (heroe) => {
//         if (heroe.id === id){
//             return heroe
//         }else {
//             return false
//         }
//     })
// }
// const getHeroebyName = (id) => {
//     return heroes.find ( (heroe) => heroe.id === id);
// }

// const getHeroebyName = (id) => {
//     return heroes.find ( heroe => heroe.id === id);
// }
const getHeroebyName = (id) => heroes.find ( heroe => heroe.id === id)

const getHeroebyOwner = (owner) => heroes.filter ( heroe => heroe.owner === owner)

console.log(getHeroebyOwner('DC'))