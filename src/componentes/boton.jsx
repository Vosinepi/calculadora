import React from "react";
import "../assets/scss/boton.scss";

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <>
      <div
        className={`boton-contenedor ${
          esOperador(props.children) ? "operador" : ''
        }`.trimEnd()} onClick={() => {props.clickHandler(props.children); props.numero(props.children)}}>
        {props.children}
      </div>
    </>
  );
};

export default Boton;
