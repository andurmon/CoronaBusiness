import React from 'react'
import logo from '../../images/logo_g.png'
import '../../styles/tyc.css'

export default function TyC(){
  return(
    <div id="tyc">
      <h1>Términos y Condiciones de Uso de servicio</h1><h1>COMPRA LOCAL</h1>
      <img id="logo" alt="" src={logo} width="82" height="82" className="d-inline-block align-top"/>
      <br/>
      <h2>ASPECTOS GENERALES</h2>
      <p>COMPRA LOCAL es una iniciativa propuesta por estudiantes de la escuela de Ingeniería de la Universidad Pontificia Bolivariana, 
        que busca reducir el impacto económico que el COVID-19 genera en los comercios locales durante la cuarentena obligatoria decretada
         tanto por los gobiernos locales, como por el Gobierno nacional.</p><br/>
      <h2>Confidencialidad</h2>
      <br/>

      <div>
        <h3>Comprador</h3>
        <p>Los datos entregados por el comprador son únicamente para comparar en la base de datos de los comercios, cuáles son los más cercanos. 
          Por lo tanto, en ningún momento la información entregada por los compradores es suministrada a un tercero; con el fin de que la consulta 
          tenga total confidencialidad. Los datos pueden ser utilizados también para hacer análisis estadístico y así mejorar el servicio.</p>
        <br/>
        <p>
          El comprador se compromete a darle un buen uso de los datos suministrados de los vendedores por parte del sistema, el único fin de la 
          información de los vendedores es que el comprador haga un contacto posterior directamente con el vendedor para adquirir un bien o servicio
          que éste ofrezca.
        </p>
      </div>

      <br/>

      <div>
        <h3>Vendedor</h3>
        <p>Se garantiza a las personas naturales o jurídicas que suministren sus datos a nuestro usuario de WhatsApp, que esta información será 
          guardada en una base de datos son el único fin de que las personas que vivan cerca a sus negocios, puedan tomar la decisión de contactarse
          con un vendedor.
        </p>
      </div>
      <br/>
      <p>
        Cuando un comprador suministra datos al vendedor, éste debe hacer un uso adecuado de la información, de tal forma que su único uso sea el de 
        llevar un producto al lugar de destino.
      </p>
      <br/>
      <h2>Detalle del servicio.</h2>

      <div>
        <h3>Comprador</h3>
        <p>Persona natural que, mediante el servicio, busque informarse de los comercios cercanos para luego obtener un producto remunerado mediante 
          un contrato de compraventa o cualquier otro tipo de contrato lícito, con el fin de adquirir un bien.</p>
          <br/>
        <h3>Vendedor.</h3>
        <p>Persona natural o jurídica que busca ser conocido por los compradores para posteriormente suministrar un bien de manera directa con el 
          comprador el cual será remunerado.</p>
        <br/>
      </div>
      
      <h2>Capacidad</h2>
      <p>Es claro para el COMPRADOR que la relación contractual que se puede llegar a generar por el uso del servicio no vincula de ninguna manera 
        al Operador (COMPRA LOCAL). Lo anterior, puesto que la relación contractual será directamente con el VENDEDOR, y consistirá en un contrato 
        de mandato remunerado celebrado por medio electrónicos, en el que el Consumidor es el mandante.</p>
      
      <br/>

      <h2>Numero Habilitado</h2>
      <p>El único número habilitado para usar el servicio es +57 305 9125194, y la comunicación sólo se puede hacer mediante Whatsapp, en ningún 
        momento se acepta que sea por llamadas telefónicas, mensajes de texto o cualquier otro medio distinto al ya establecido.</p>
      <br/>
      <p>Parágrafo 1: Ni la Universidad Pontificia Bolivariana, ni los estudiantes participantes del proyecto se hacen responsables de cualquier 
        anomalía que pueda ocurrir con el uso del servicio.</p>
      <br/>
      <p>Parágrafo 2: El único fin del proyecto es propiciar una ayuda a las personas y a los comercios para aligerar la crisis económica que la 
        situación actual puede generar y no se busca obtener un beneficio económico por lo tanto el uso es TOTALMENTE GRATUITO.</p>
    </div>
  )
}