import React , {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './component/nav';
import Home from './component/home';
import Skills from './component/skills';
import './App.css';
import About from './component/about';
import Portfolio from './component/portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path = '/' component = {Home} />
          <Route path = '/skills' component = {Skills} />
          <Route path = '/about' component = {About} />
          <Route path = '/portfolio' component = {Portfolio} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
