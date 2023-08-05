import React from 'react';
import '../Estilos/BotonClear.css'

const BotonClear = (props) => {
  return(
    <div className='btn-clear'>
        {props.children}
    </div>
  )
}

export { BotonClear }