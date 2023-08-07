import { Boton, Pantalla, BotonClear } from './index'
import './App.css'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const agregarValor = (valor) =>{
    if((valor === '+' || valor === '-' || valor === '*' || valor === '/')
    && (input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/'))){
      setInput(input.slice(0, -1) + valor)
    } else{
      setInput(input + valor)
    }
  }
  
  const resultado = () =>{
    input === '' ? null : setInput(evaluate(input))
  }

  return (
    <>
      <div className='app'>
        <h1>Calculadora</h1>
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
