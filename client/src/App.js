import React from 'react';
import {Route} from 'react-router'
import './App.css';
import { Home } from './pages/Home';
import {Main} from './pages/Main'


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Main}/>
      <Route exact path = "/main" component={Main}/>
      <Route exact path = "/home" component={Home}/>
    </div>
  );
}

export default App;
