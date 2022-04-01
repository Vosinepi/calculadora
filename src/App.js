import './assets/scss/App.scss';
import freeCodeLogo from './assets/imagenes/freecodecamp-logo.png';
import Boton from './componentes/boton';
import Clear from './componentes/clear';
import Pantalla from './componentes/pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('')

  const agregarInput = (val) => {
    setInput(input + val)
  }

  const operacion = () => {
    setInput(evaluate(input))
  }

  return (
    <div className="app">
      <div className="logo">
        <img src={freeCodeLogo} className="logo-freecode" alt="Logo Freecode" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Pantalla input={input}></Pantalla>
        </div>
        <div className="botones">
          <div className="fila">
            <Boton clickHandler={agregarInput}>7</Boton>
            <Boton clickHandler={agregarInput}>8</Boton>
            <Boton clickHandler={agregarInput}>9</Boton>
            <Boton clickHandler={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={agregarInput}>4</Boton>
            <Boton clickHandler={agregarInput}>5</Boton>
            <Boton clickHandler={agregarInput}>6</Boton>
            <Boton clickHandler={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={agregarInput}>1</Boton>
            <Boton clickHandler={agregarInput}>2</Boton>
            <Boton clickHandler={agregarInput}>3</Boton>
            <Boton clickHandler={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={operacion}>=</Boton>
            <Boton clickHandler={agregarInput}>0</Boton>
            <Boton clickHandler={agregarInput}>.</Boton>
            <Boton clickHandler={agregarInput}>/</Boton>
          </div>
        </div>
        <div className="fila">
          <Clear clickHandler={() => setInput('')}>AC</Clear>
        </div>
      </div>
    </div>
  )
}

export default App
