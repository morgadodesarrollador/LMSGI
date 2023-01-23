
import React, { useState } from 'react'
import PropTypes  from 'prop-types'


const CouterApp = ( { valor }) => {

    const [ counter, setCounter ] = useState( valor ) //valor inicial del hook

    const handleAdd = () =>  setCounter (counter + 1) 
                    //    setCounter ( ( c ) => c + 1)
    
    const handleMinus = () => setCounter (counter - 1) 
    const handleReset = () => setCounter (valor) 
     
    return (
        <>
        <h3>Contador: { counter }</h3>
        {/* <button onClick={ (event) => { handleAdd(event)}} */}
        
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleMinus }> -1 </button>
        <button onClick={ handleReset }> Reset </button>


        </>
    )
}

export default CouterApp

CouterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

CouterApp.defaultProps = {
    valor: 0
}