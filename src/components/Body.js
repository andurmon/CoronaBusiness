import React from 'react'
import { Route, Switch, Redirect, useLocation} from 'react-router-dom'
import notFound from '../images/icons8-nothing-found-24.png'
import Inicio from './content/Inicio'
import TyC from './content/TyC'
import WpBusiness from './content/WpBusiness'
import QuienesSomos from './content/QuienesSomos'

function Body(){
  return(
    <div id="body">
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio"/>
          </Route>
          <Route path='/inicio' exact component = {Inicio}/>
          <Route path="/tyc" exact component = {TyC}/>
          <Route path="/wpbusiness" exact component = {WpBusiness}/>
          <Route path ="/quienessomos"exact component = {QuienesSomos}/>
          <Route path="/" component = {NoMatch}/>
        </Switch>
    </div>
  )
}

function NoMatch(){
  let location = useLocation();
  return(
    <div id="no match">
      <h1>Lo sentimos!<img alt="" src={notFound}/></h1>
      <p>El enlace <strong>http://conectandote.com.co/{location.pathname}</strong> no existe</p>
    </div>
  )
}


export default Body
