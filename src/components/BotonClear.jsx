import React from 'react';
import '../Estilos/BotonClear.css'
import { FaDeleteLeft } from "react-icons/fa6"

const BotonClear = (props) => {
  return(
    <div className='btn-clear' onClick={() => props.manejarClear()}>
        <FaDeleteLeft />
    </div>
  )
}

export { BotonClear }