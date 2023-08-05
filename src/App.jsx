import { Boton } from './components/Boton'
import { Pantalla } from './components/Pantalla'
import { BotonClear } from './components/BotonClear'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <h1>Calculadora</h1>
        <div className='calculadora-contenedor'>
          <Pantalla input={'2 + 4'}/>
          <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>
          </div>
          <div className="fila">
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className="fila">
            <BotonClear>Clear</BotonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
