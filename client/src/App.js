import React from 'react';
import {Route} from 'react-router'
import './App.css';
import { Home } from './pages/Home';
import {Main} from './pages/Main'
import { Detail } from './components/CardDetail/Detail';


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Main}/>
      <Route exact path = "/main" component={Main}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/detail/:id" component={Detail}/>
    </div>
  );
}

export default App;
