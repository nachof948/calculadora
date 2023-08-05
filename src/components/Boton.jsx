import React from 'react';
import '../Estilos/Boton.css'
const Boton = (props) => {
  return(
    <>
      <div className="boton">
        {props.children}
      </div>
    </>
  )
}

export { Boton }