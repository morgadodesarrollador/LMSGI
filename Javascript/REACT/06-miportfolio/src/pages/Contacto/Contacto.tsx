import React from 'react'

export const ContactoPage = () => {
  return (
    <>
        <h2>Formulario de Contacto</h2>
        <form>
            <div id="nombre">
                <label>Nombre</label>
                <input type="text" placeholder='Introduce tu nombre' />
            </div>
            <div id="nombre">
                <label>Apellidos</label>
                <input type="text" placeholder='Introduce tus apellidos' />
            </div>
        </form>
    </>
  )
}
