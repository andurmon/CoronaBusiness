import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import logo_g from '../logo_g.png'
import { useHistory } from "react-router-dom";
function Header(){
  
  let history = useHistory();

  function handleLink(eventKey){
    console.log(eventKey)
    history.push(eventKey)
  }
  
  return(
    <header>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="/inicio">
            <img alt="" width="100" height="99.5"src={logo_g} width="30" height="30" className="d-inline-block align-top"/>{' '}
            CompraLocal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="dark" defaultActiveKey="/inicio" onSelect={(eventKey)=>handleLink(eventKey)}>
              <Nav.Link eventKey="/inicio">Inicio</Nav.Link>
              <Nav.Link eventKey="/tyc">Terminos y Condiciones</Nav.Link>
              <Nav.Link eventKey="/wpbusiness">Whastapp Business</Nav.Link>
              <Nav.Link eventKey="/quienessomos">Quienes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  )
}
export default Header