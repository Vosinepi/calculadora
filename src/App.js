import './assets/scss/App.scss'
import freeCodeLogo from './assets/imagenes/freecodecamp-logo.png'
import Boton from './componentes/boton'
import Clear from './componentes/clear'
import Pantalla from './componentes/pantalla'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const agregarInput = (val) => {
    setInput(input + val)
  }
  const inputUnico = (val) => {
    setInput2(val)
  }
  const operacion = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Ingrese valor')
    }
  }

  return (
    <div className="app">
      <div className="logo">
        <img src={freeCodeLogo} className="logo-freecode" alt="Logo Freecode" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Pantalla pantalla={1} input={input}></Pantalla>
          <Pantalla pantalla={2} input={input2}></Pantalla>
        </div>
        <div className="botones">
          <div className="fila">
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              7
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              8
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              9
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              +
            </Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              4
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              5
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              6
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              -
            </Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              1
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              2
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              3
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              *
            </Boton>
          </div>
          <div className="fila">
            <Boton clickHandler={operacion} numero={inputUnico}>
              =
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              0
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              .
            </Boton>
            <Boton clickHandler={agregarInput} numero={inputUnico}>
              /
            </Boton>
          </div>
        </div>
        <div className="fila">
          <Clear
            clickHandler={() => {
              setInput('')
              setInput2('')
            }}
          >
            AC
          </Clear>
        </div>
      </div>
    </div>
  )
}

export default App
