// importar react del paquete react//
// nos permite usar todo el poder del componente

import React from "react";
import '../hojas_de_estilos/testimonio.css'
export function Testimonio(props){
  // escructura del testimonio
  return (
    // escructura del componente
    <div className='contenedor-testimonio' >
      <img className='imagen-testimonio'
      src={require(`../imagenes/testimonio${props.imagen}.png`)}
      alt='Foto de Ema'/>
      <div className='contenedor-texto-testimonio' >
        <p className='nombre-testimonio' >
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className='cargo-testimonio' >{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio' >"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio