import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import logo from '../images/logo_g.png'
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
           <img alt="" width="50px" height="50px"src={logo} className="d-inline-block align-top"/>
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