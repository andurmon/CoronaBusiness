import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body';
import {BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <div id="App">
      <BrowserRouter>
        <Header/>
        <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
