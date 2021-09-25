import React from 'react';
import {Route} from 'react-router'
import './App.css';
import { Home } from './pages/Home';
import {Main} from './pages/Main'
import { PokemonCreate } from './pages/PokemonCreate';
import { PokemonDetail } from './pages/PokemonDetail';


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Main}/>
      <Route exact path = "/main" component={Main}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/detail/:id" component={PokemonDetail}/>
      <Route exact path = "/create" component={PokemonCreate}/>
    </div>
  );
}

export default App;
