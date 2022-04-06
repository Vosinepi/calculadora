import '../assets/scss/pantalla.scss'

import React from 'react'

const Pantalla = (props) => {
  
  const esUnico = (valor) => {
    return valor === 2;
  };


  return (
    <div id={props.id} className={`pantalla ${esUnico(props.pantalla) ? 'unico' : ''
    }`.trimEnd()}>{props.input}</div>
  )
}

export default Pantalla

