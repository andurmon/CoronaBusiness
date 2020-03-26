import React, {useState} from 'react'
import smartphone from '../../images/smartphone2.png'
import wpChat from '../../images/whatsapp_chat.png'
export default function Inicio(){
  return(
    <div id="inicio">
      <h1>Compra Local</h1>
      <section>
        <img id="wp_chat" alt="" src={wpChat} width="450" height="827"/>
        <div id="inicioContent">
          <h2>¿Cómo funciona?</h2>
          <p>Con compra local puedes encontrar facilmente todas las tiendas, minimercados y supermercados desde la comodidad de tu casa. 
            No necesitas instalar ninguna aplicacion en tu dicpositivo móvil, solo mándanos lo que necesitas al WhatApp y nosotros te colaboraremos.
            Envíanos un mesaje de WhastApp al numero +57 305 9125194
          </p>
        </div>
        
      </section>
    </div>
  )
}