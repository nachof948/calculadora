import React from 'react';
import '../Estilos/Boton.css'
const Boton = (props) => {
  
  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return(
    <>
      <div 
      className={`boton ${esOperador(props.children) ? "operacion" : null}`} 
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
    </>
  )
}

export { Boton }