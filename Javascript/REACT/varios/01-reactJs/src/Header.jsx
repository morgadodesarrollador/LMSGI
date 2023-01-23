import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title, subtitle, edad, name }) => {
  return (
    <>
        <h1>Te llamas {title } </h1>
        <h2> Eres un { subtitle }</h2>
        <h3> tienes { edad } años </h3>
        <h3>Autor: { name } </h3>
    </>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

Header.defaultProps = {
  title: 'Soy Superman',
  subtitle: 'de capa roja y traje azul',
  name: 'Morgado'
}
