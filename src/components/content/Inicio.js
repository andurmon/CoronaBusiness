import React from 'react'
import wpChat from '../../images/smartphone1.png'//whatsapp_chat.jpg
import sphone1 from '../../images/smartphone1.png'
import sphone2 from '../../images/smartphone2.png'
import ubicacion1 from '../../images/ubicacion1.png'
import ubicacion2 from '../../images/ubicacion2.png'
import ubicacion3 from '../../images/ubicacion3.png'
import '../../styles/inicio.css'
import {Image, Carousel} from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption'

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
        <Carousel>
          <Carousel.Item> 
            <img id="wp_chat" width=" 230px" height= "492px" src={wpChat}/>
            <Carousel.Caption><h3>1.</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
            <img width=" 230px" height= "492px"  src={ubicacion1} alt="First slide"/>
            <Carousel.Caption><h3>2.</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width=" 230px" height= "492px" src={ubicacion2} alt="Third slide"/>
            <Carousel.Caption><h3>3.</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width=" 230px" height= "492px" src={ubicacion3} alt="Third slide"/>
            <Carousel.Caption><h3>4.</h3></Carousel.Caption>
           
          </Carousel.Item>
        </Carousel>
        
      </section>
    </div>
  )
}