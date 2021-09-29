import React from 'react';
import {Route, Switch, Redirect} from 'react-router'
import './App.css';
import { Home } from './pages/Home';
import {Main} from './pages/Main'
import { PokemonCreate } from './pages/PokemonCreate';
import { PokemonDetail } from './pages/PokemonDetail';
import {NotFound} from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component={Main}/>
        <Route exact path = "/main" component={Main}/>
        <Route exact path = "/home" component={Home}/>
        <Route exact path = "/detail/:id" component={PokemonDetail}/>
        <Route exact path = "/create" component={PokemonCreate}/>
        <Route exact path = "/notFound" component={NotFound}/>
        <Redirect from='*' to='/notFound'/>
      </Switch>
      
    </div>
  );
}

export default App;
