import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Inicio from './content/Inicio'
import TyC from './content/TyC'
import WpBusiness from './content/WpBusiness'
import QuienesSomos from './content/QuienesSomos'

function Body(){
  return(
    <div id="body">
        <Redirect
            from="/"
            to="/inicio" />
        <Switch>
          <Route path='/inicio' exact component = {Inicio}/>
          <Route path="/tyc" exact component = {TyC}/>
          <Route path="/wpbusiness" exact component = {WpBusiness}/>
          <Route path ="/quienessomos"exact component = {QuienesSomos}/>
        </Switch>
    </div>
  )
}

export default Body
