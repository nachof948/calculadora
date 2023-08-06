import React from 'react';
import '../Estilos/Boton.css'
const Boton = ({ children, manejarClick }) => {
  
  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return(
    <>
      <div 
      className={`boton ${esOperador(children) ? "operacion" : null}`} 
      onClick={() => manejarClick(children)}>
        {children}
      </div>
    </>
  )
}

export { Boton }