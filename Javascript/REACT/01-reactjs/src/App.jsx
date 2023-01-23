import './App.css';
import { HeroesList } from './componentes/HeroesList';
import { heroes, lenguajes } from './data/heroes';

const App = () => {
  console.log(heroes);
  let titulo = "El Corte Inglés";
  return (
    <> 
      <h1 className='titulo'> { titulo } </h1>
      <h3>Listado de Héroes</h3>
      <ul>
         {
          heroes.map( (heroe) => {
            return (
              <li>{ heroe.name } - { heroe.owner } </li>
            )
          })
         }
      </ul>
    </>
  )
}

export default App;

// <HeroesList heroes={heroes} />

// js, jsx
// ts, tsx --> typescript

// <>   </> FRAGMENTO -- mecanismo para agrupar etiquetas html

// function App1() {
//   console.log (heroes);
//   return (
//     <div className="App">
//       <h1> Hola Mundo</h1>
//         <ul>
//           {
//             heroes.map ( (h) => {
//               return <li key={h.id}> { h.name } ({h.owner }) </li>
//             })
//           }
//         </ul>
//     </div>
//   );
// }
// export default App1;


// import React from 'react'

// const App = () => {
//   //codigo JS
//   return ( // codigo HTML + bucles `variblees
//     <div>
      
//     </div>
//   )
// }

// export default App
