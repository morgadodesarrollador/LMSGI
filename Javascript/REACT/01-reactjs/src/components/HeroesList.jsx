import React from 'react'
import { heroes } from '../data/heroes'
import './Heroes.css'
// import Table from 'react-bootstrap/Table';
// props = { name: 'morgado } --> props.name
export const HeroesList = (props) => {
    console.log(props.heroes)
    return (
        <>
            <table className='tabla_heroes'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Compañia</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        heroes.map( (heroe) => {
                            return(
                                <tr>
                                    <td>{ heroe.id }</td>
                                    <td>{ heroe.name }</td>
                                    <td>{ heroe.owner }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </table>
            
        </>
    )
}
// export const HeroesList1 = (props) => {
    
//     const heroes = props.heroes;
//     return (
//              <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                         <td>Id</td>
//                         <td>Nombre</td>
//                         <td>Compañia</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                       heroes.map( (heroe) => {
//                         console.log(heroe);
//                         return (
//                             <tr >
//                                 <td>{heroe.id}</td>
//                                 <td>{heroe.name}</td>
//                                 <td>{heroe.owner}</td>
//                             </tr>
//                         )    
//                       })
//                     }
//                 </tbody>
//             </Table>

//   )
// }
