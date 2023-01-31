import './App.css';
import './index.css';
// import { HeroesList } from './components/HeroesList';
// import { heroes, lenguajes } from './data/heroes';

import Header from './components/structura/header/Header';
import Main from './components/structura/main/Main';
import { Footer } from './components/structura/footer/Footer';
// import { Header, Main, Footer } from './components/structura/index';


const App = () => {
  let titulo = "Los Superhéroes";
  return (
    <> 
      <Header />
      <Main />
      <Footer />
      {/* <h1 className='titulo'> { titulo } </h1>
      <HeroesList heroes={ heroes }/> */}
    
     
      {/* <HeroesList heroes={ heroes } /> */}
      
    </>
  )
}

export default App;

// 

// js, jsx
// ts, tsx --> typescript
{/* <ul>
{
 heroes.map( (heroe) => {
   return (
     <li>{ heroe.name } - { heroe.owner } </li>
   )
 })
}
</ul> */}
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
