import React, {useState} from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import logo from '../images/logo3_light.png'
import { useHistory, useRouteMatch } from "react-router-dom";
function Header(){
  
  let history = useHistory();
  let match = useRouteMatch("/:content");
  console.log(match)

  function handleLink(eventKey){
    history.push(eventKey)
  }
  /////// <Nav.Link eventKey="/wpbusiness">Whastapp Business</Nav.Link>
  return(
    <header>
        <Navbar variant="light" expand="lg">
          <Navbar.Brand href="/compralocal/inicio">
           <img alt=""  height="70px" src={logo} className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="light"   onSelect={(eventKey)=>handleLink(eventKey)}>
              <Nav.Link eventKey="/compralocal/inicio">Inicio</Nav.Link>
              <Nav.Link eventKey="/compralocal/tyc">Terminos y Condiciones</Nav.Link>
             
              <Nav.Link eventKey="/compralocal/quienessomos">Quienes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  )
}
export default Header