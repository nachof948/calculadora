import { Boton, Pantalla, BotonClear } from './index'
import './App.css'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const agregarValor = (valor) =>{ /* Parámetro valor: Esta función acepta un parámetro valor, que representa el dígito o el operador que se debe agregar a la entrada actual */
    if((valor === '+' || valor === '-' || valor === '*' || valor === '/') 
    && (input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/'))){ /*  El primer bloque if verifica si el valor es un operador (+, -, * o /) y si la entrada actual (input) ya termina con un operador. Esto se hace para evitar la entrada de operadores seguidos. */
      
      setInput(input.slice(0, -1) + valor) /* Se toma la entrada actual (input) y se elimina el último carácter utilizando el método slice(0, -1) para quitar el operador duplicado. Luego, se agrega el nuevo operador (valor) a la entrada corregida. En esencia, esto reemplaza el operador duplicado anterior por el nuevo operador. */
    } 
    else{
      setInput(input + valor)
    }
  }
  
  const resultado = () =>{
    input === '' ? null : setInput(evaluate(input))
  }

  return (
    <>
      <div className='app'>
        <div className='calculadora-contenedor'>
          <Pantalla input={input}/>
          <div className="fila">
            <Boton manejarClick={agregarValor}>1</Boton>
            <Boton manejarClick={agregarValor}>2</Boton>
            <Boton manejarClick={agregarValor}>3</Boton>
            <Boton manejarClick={agregarValor}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>4</Boton>
            <Boton manejarClick={agregarValor}>5</Boton>
            <Boton manejarClick={agregarValor}>6</Boton>
            <Boton manejarClick={agregarValor}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>7</Boton>
            <Boton manejarClick={agregarValor}>8</Boton>
            <Boton manejarClick={agregarValor}>9</Boton>
            <Boton manejarClick={agregarValor}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={resultado}>=</Boton>
            <Boton manejarClick={agregarValor}>0</Boton>
            <Boton manejarClick={agregarValor}>.</Boton>
            <Boton manejarClick={agregarValor}>/</Boton>
          </div>
          <div className="fila">
            <BotonClear manejarClear={() => setInput('')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
