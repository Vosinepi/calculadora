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
  console.log(input)
  console.log('este numero' + input.charAt(input.length - 4))
  const agregarInput = (val) => {
    var ultimoValor = String(input.charAt(input.length - 1))
    var ultimoValorMenosDos =  String(input.charAt(input.length - 3))
    console.log(ultimoValorMenosDos)
    if (input === '0') {
      setInput(val)
    } else {
      if (val === '.') {
        evaluaPuntos(input, val)
      } else if (
        (val === '*' || val === '/') &&
        (ultimoValor === '/' || ultimoValor === '*')
      ) {
     
        setInput(input.slice(0,-1) + val)
       // console.log("Este es el nuevo input con el operador "+ input)
     //   alert(
     //     'Estas queriendo agregar un doble operador que no esta permitido1'
     //   )
      } else if (val === '+' && input.charAt(input.length - 1) === '+') {
     
        setInput(input.slice(0,-1) + val)   // alert(
     //     'Estas queriendo agregar un doble operador que no esta permitido2'
     //   )
      } else if (val === '+' && input.charAt(input.length - 1) === '-') {
        setInput(input + val)
      } else if (
        //"5 * - + 5" 
        input.charAt(input.length - 2) === '-' && (ultimoValorMenosDos === '*' || ultimoValorMenosDos === '/')      ) {
           console.log(input.substring(0, 1) +  "" +   input.substring(1 + 1))
           setInput(input.substring(0, 1) +  "" +   input.substring(2 + 1) + val)
        
      }else {
        setInput(input + val)
      }
    }
  }
  const evaluaPuntos = (input, val) => {
    console.log(input)
    var lastOperator = input.match(/(\-|\+|\/|\*)(?=[^\-\+\/\*]*$)/g)
    if (lastOperator != null) {
      var indexLastOperator = input.lastIndexOf(lastOperator)
      var resultado = input.slice(indexLastOperator)
      console.log(resultado)
      var resultado2 = resultado.indexOf('.')
      console.log(resultado2)
      console.log(resultado2 == -1)
      if (resultado2 == -1) {
        setInput(input + val)
      } else {
      }
    } else {
      if (input.indexOf('.') != -1) {
      } else {
        setInput(input + val)
      }
    }
  }

  const inputUnico = (val) => {
    setInput2(val)
  }
  const operacion = () => {
    if (input) {
      setInput(String(evaluate(input)))
      console.log(input)
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
          <Pantalla id="display" pantalla={1} input={input}></Pantalla>
          <Pantalla pantalla={2} input={input2}></Pantalla>
        </div>
        <div className="botones">
          <div className="fila">
            <Boton id="seven" clickHandler={agregarInput} numero={inputUnico}>
              7
            </Boton>
            <Boton id="eight" clickHandler={agregarInput} numero={inputUnico}>
              8
            </Boton>
            <Boton id="nine" clickHandler={agregarInput} numero={inputUnico}>
              9
            </Boton>
            <Boton id="add" clickHandler={agregarInput} numero={inputUnico}>
              +
            </Boton>
          </div>
          <div className="fila">
            <Boton id="four" clickHandler={agregarInput} numero={inputUnico}>
              4
            </Boton>
            <Boton id="five" clickHandler={agregarInput} numero={inputUnico}>
              5
            </Boton>
            <Boton id="six" clickHandler={agregarInput} numero={inputUnico}>
              6
            </Boton>
            <Boton
              id="subtract"
              clickHandler={agregarInput}
              numero={inputUnico}
            >
              -
            </Boton>
          </div>
          <div className="fila">
            <Boton id="one" clickHandler={agregarInput} numero={inputUnico}>
              1
            </Boton>
            <Boton id="two" clickHandler={agregarInput} numero={inputUnico}>
              2
            </Boton>
            <Boton id="three" clickHandler={agregarInput} numero={inputUnico}>
              3
            </Boton>
            <Boton
              id="multiply"
              clickHandler={agregarInput}
              numero={inputUnico}
            >
              *
            </Boton>
          </div>
          <div className="fila">
            <Boton id="equals" clickHandler={operacion} numero={inputUnico}>
              =
            </Boton>
            <Boton id="zero" clickHandler={agregarInput} numero={inputUnico}>
              0
            </Boton>
            <Boton id="decimal" clickHandler={agregarInput} numero={inputUnico}>
              .
            </Boton>
            <Boton id="divide" clickHandler={agregarInput} numero={inputUnico}>
              /
            </Boton>
          </div>
        </div>
        <div className="fila">
          <Clear
            id="clear"
            clickHandler={() => {
              setInput('0')
              setInput2('0')
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
