import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import logo from '../images/logo_g.png'
import { useHistory, useRouteMatch } from "react-router-dom";
function Header(){
  
  let history = useHistory();
  let match = useRouteMatch("/:content");
  console.log(match.url)
  function handleLink(eventKey){
    history.push(eventKey)
  }
  /////// <Nav.Link eventKey="/wpbusiness">Whastapp Business</Nav.Link>
  return(
    <header>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="/inicio">
           <img alt="" width="50px" height="50px"src={logo} className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="dark" defaultActiveKey={match.url}  onSelect={(eventKey)=>handleLink(eventKey)}>
              <Nav.Link eventKey="/inicio">Inicio</Nav.Link>
              <Nav.Link eventKey="/tyc">Terminos y Condiciones</Nav.Link>
             
              <Nav.Link eventKey="/quienessomos">Quienes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  )
}
export default Header