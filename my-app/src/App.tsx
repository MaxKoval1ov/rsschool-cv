import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { Button,ButtonGroup,ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import About from './About';
import { Container,Col, Row } from 'react-bootstrap'
import Skills from './Skills';
import Exp from './Exp';
import Language from './language';
import Education from './Education';
import Video from './Video';
import Contacts from './Contacts';
import Footer from './Footer';
import { render } from '@testing-library/react';
import {Helmet} from "react-helmet";

class App extends React.Component {
  componentDidMount(){
    let btn:any = document.querySelector('.btn-to-top');
    function magic() {
      if (window.pageYOffset > 20) {
        btn.style.display = 'block'
      } else { btn.style.display = 'none' }
    }
    btn.onclick = function () {
      window.scrollTo(0,0)
    }

    window.onscroll = magic

  }
  render(){
  return (
    <Router>
      <Container className ="bg-dark">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My CV</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <h1 className = "hidden-title">Kovalyov Maksim - Junior Front-End Developer CV</h1>
      <div className="global_wrapper">
        <main className="main">
          <Header />
          <About/>
          <Skills/>
          <Exp/>
          <Language/>
          <Education/>
          <Video/>
          <Contacts/>
        </main>
        <button id="scrollToTop" className="btn-to-top" title="Go to top" type="button" >Top</button>
        <Footer/>
      </div>
      </Container>
    </Router>
  );
  }
}

export default App;
