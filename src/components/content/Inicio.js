import React from 'react'
import wpChat from '../../images/whatsapp_chat.png'
import '../../styles/inicio.css'
import {Image} from 'react-bootstrap'

export default function Inicio(){
  return(
    <div id="inicio">

      <h1>Compra Local</h1>
      <br/>
      <section>
        <div id="inicioContent">
          <h2>¿Qué es?</h2>
          <p>Con COMPRA LOCAL puedes encontrar facilmente todas las tiendas, minimercados y supermercados desde la comodidad de tu casa. 
            No necesitas instalar ninguna aplicacion en tu dispositivo móvil, solo mándanos lo que necesitas al WhatsApp y nosotros te colaboraremos.
            Envíanos un mesaje de WhastApp al numero +57 305 9125194
          </p>
          <br/>
          <h2>¿Cómo funciona?</h2>
          <ol>
            <li>Envíanos un mesaje de WhastApp al numero +57 305 9125194.</li>
            <li>Recibirás un mensaje automático indicándote qué hacer. Solo debes mandarnos tu ubicación.</li>
            <li>Te llegará una lista de locales comerciales cercanos a tu localidad. 
              Con esta valiosa información podrás pedir domicilios y ayudar a la economia local durante esta crisis sanitaria.</li>
          </ol>
        </div>
        <Image id="wp_chat" src={wpChat} rounded />
      </section>
   
    </div>
  )
}