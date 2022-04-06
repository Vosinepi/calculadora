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
    var ultimoValor = String(input.charAt(input.length -1))
    if (val === "."){
    evaluaPuntos(input,val)
  } else if (val == '%' || val == '/' || val == '*'  && (ultimoValor == '%' || ultimoValor == '/' || ultimoValor == '*' )) {
    alert("Estas queriendo agregar un doble operador que no esta permitido")

  }else if( val == "+" &&  input.charAt(input.length-1) == "+" ){ alert("Estas queriendo agregar un doble operador que no esta permitido")}
  else if( val == "+" &&  input.charAt(input.length-1) == "-" ){
    setInput(input+val)
  } else {
    setInput(input+val)
  }



}
const evaluaOperadores = (input,val) => {
  

  if(input.charAt(input.length - 1) === '-'){
    setInput(input + val)
} else if ( input.charAt(input.length - 1) === "+" && val == "-" )
{  setInput(input+val) }
else {alert("Estas queriendo meter otro operador")}}
  //   console.log(input.charAt(input.length - 1) )
  //   if (input.charAt(input.length - 1) === '-') {
  //     setInput(val)
  //   } else if (val === '.'){
  //     const calc = [...input]
  //     console.log(calc)
  
  //     let result = calc
  //     .filter(
  //       (i, idx) => calc[idx - 1] !== i || calc[idx - 1] !== '.'
  //     )
  //     const result2 = result.join('')
  //     console.log(result2)
  //     setInput(result2 + val)
  //   } else {
  //     setInput (input + val)
  //   }
   
  // }

  const evaluaPuntos = (input,val) => {
    console.log(input)
    var lastOperator = input.match(/(\-|\+|\/|\*)(?=[^\-\+\/\*]*$)/g)
    if (lastOperator != null ){
    var indexLastOperator = input.lastIndexOf(lastOperator)
    var resultado = input.slice(indexLastOperator)
    console.log(resultado)
    var resultado2 = resultado.indexOf(".")
    console.log(resultado2)
    console.log(resultado2 == -1)
if(resultado2 == -1){
  setInput(input+val)
} else { alert("Ya existe")}
  } else
  { if (input.indexOf(".") != -1){
    alert("Ya existe")
  } else {setInput(input+val)}}
}


  const inputUnico = (val) => {
    setInput2(val)
  }
  const operacion = () => {
    if (input) {
      setInput(String(evaluate(input)))
      console.log(input)   } else {
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
