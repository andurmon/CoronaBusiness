import React, {userState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Inicio from './content/Inicio'
import TyC from './content/TyC'
import WpBusiness from './content/WpBusiness'
import QuienesSomos from './content/QuienesSomos'

function Body(){
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/inicio' exact component = {Inicio}/>
          <Route path="/tyc" exact component = {TyC}/>
          <Route path="/wpbusiness" exact component = {WpBusiness}/>
          <Route path ="/quienessomos"exact component = {QuienesSomos}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Body
