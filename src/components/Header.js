import React, {useState} from 'react'
import {Nav, NavDropdown, Navbar, Form, FormControl,Button, Tabs, Tab, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import {Link, BrowserRouter} from 'react-router-dom'
import { useHistory } from "react-router-dom";
function Header(){
  
  let history = useHistory();

  function handleLink(eventKey){
    console.log(eventKey)
    history.push(eventKey)
  }
  
  return(
    <header>
      <BrowserRouter>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="/inicio">CoronaBusiness</Navbar.Brand>
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
      </BrowserRouter>
    </header>
  )
}
export default Header