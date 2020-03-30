import React from 'react';
import Compralocal from './Compralocal'
import Conectandote from './Conectandote'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {

  return (
    <div id="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Conectandote}/>
          <Route path="/compralocal" component={Compralocal}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
