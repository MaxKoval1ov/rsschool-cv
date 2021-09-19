import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { Button,ButtonGroup,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import About from './About';

function App() {
  return (
    <Router>
      <h1 className = "hidden-title">Kovalyov Maksim - Junior Front-End Developer CV</h1>
      <div className="global_wrapper">
        <Header />
        <About/>
        {/* footer */}
      </div>
    </Router>
  );
}

export default App;
