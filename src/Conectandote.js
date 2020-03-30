import React from 'react';
import './styles/conectandote.css'
import antena1 from "./images/antena1.JPG"
import antena2 from "./images/antena2.JPG"
import antena4 from "./images/antena4.JPG"

export default function Conectandote() {

  return (
    <div id="Conectandote">
      <header>
        <nav class="secondary_header">
        <p></p>
          <p></p>
          <p></p>
          <p></p>
          
            <ul>
              <li><a href="#">QUIENES SOMOS&nbsp;</a></li>      
              <li><a href="#">SERVICIOS</a></li>
              <li><a href="#">CONTACTO</a></li>
            </ul>
          </nav>
        </header>
        
      <div class="container">
        <div class="fila">
          <article class="left_article">
          <h1>¿Quienes Somos?&nbsp;</h1>
          <p>Somos una empresa que cree en el poder la tecnologia para transformar vidas, nos&nbsp; enfocamos principlamente en&nbsp; &nbsp;conectividad a internet en municipios y zonas rurales de Colombia, además en soluciones tecnologicas integrales para pequeñas y medianas empresas&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
          </article>
          <aside class="right_article"><img src={antena1} alt="" width="100%" height="100%"/>  </aside>
        </div>

        <div class="fila">
          <article class="left_article1">
            <h3>Nuestros Servicios&nbsp; &nbsp;</h3>
          <ul>
            <li>Diseño e Implementación de redes wifi de alta densidad&nbsp;&nbsp;</li>
            <li>Software de Facturación y Punto de Venta&nbsp;&nbsp;</li>
            <li>Diseño, consultoria y&nbsp; gestión eléctrica&nbsp;</li>
            <li>Asesoria en marekting digital&nbsp;</li>
            <li>Sistemas de Video Vigilancia (CCTV)&nbsp; &nbsp;&nbsp;</li>		
          </ul>
          <h3>Nuestras Inicitivas</h3>
          <ul>
            <li><a href="compralocal/">Compra_Local</a></li>
          </ul>	
            <p>Iniciativa que permite conectar usuarios con tiendas y proveedores cercanos a su ubicación</p>
          </article>
        <aside class="right_article1"><img src={antena2} alt="" width="100%" height="100%"/> </aside>
        </div>

        <div class="fila">
        <article class="left_article">
            <h3>CONTACTO&nbsp;</h3>
          <ul>
          <li>info@conectandote.com.co</li>
          <li>Whatsapp - 3173331673</li>
          </ul>
        </article>
        <aside class="right_article"><img src={antena4} alt="" width="100%" height="100%"/></aside>  
        </div>

        <footer class="footer">
        <div>2020 - CONECTANDOTE</div>
        </footer>	
      </div>
    </div>
  );
}