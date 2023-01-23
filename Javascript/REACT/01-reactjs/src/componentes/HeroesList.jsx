import React from 'react'

export const HeroesList = (props) => {
    
    const heroes = props.heroes;
    console.log(heroes);
    return (
        <>
            <table border={1}>
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
                        console.log(heroe);
                        return (
                            <tr >
                                <td>{heroe.id}</td>
                                <td>{heroe.name}</td>
                                <td>{heroe.owner}</td>
                            </tr>
                        )    
                      })
                    }
                </tbody>
            </table>
        
        </>
  )
}
