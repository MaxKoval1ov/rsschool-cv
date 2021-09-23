import React, { Component } from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import './Skills.scss'
import webpack from './webpack.png'
import tScript from './typescript.png'
import redux from './redux.png'
import react from './react.png'


export default class Skills extends Component {
  render() {
    return (
      <section className = "Skills" id = "Skills">
        <h3 className = "skills-title">My hard <span className="skill_word">skills</span>:</h3>
        <Container >
          <Row as= 'ul'>
            <Col as= 'li' className = "skill-point">JS</Col>
            <Col as= 'li' className = "skill-point">HTML</Col>
            <Col as= 'li' className = "skill-point">CSS</Col>
          </Row>
          <Row as= 'ul'>
            <Col as= 'li' className = "skill-point">React</Col>
            <Col as= 'li' className = "skill-point">Webpack</Col>
            <Col as= 'li' className = "skill-point">TypeScript</Col>
          </Row>
          <Row as= 'ul'>
            <Col as= 'li' className = "skill-point">C++</Col>
            <Col as= 'li' className = "skill-point">C</Col>
            <Col as= 'li' className = "skill-point">ASM</Col>
          </Row>
          <div className="Webpack App-logo"><img className = "tech_img" src={webpack} alt="webpack" /></div>
          <div className="React App-logo"><img className = "tech_img" src={react} alt="react" /></div>
          <div className="Typescript App-logo"><img className = "tech_img" src={tScript} alt="typescript" /></div>
          <div className="Redux App-logo"><img className = "tech_img" src={redux} alt="redux" /></div>
        </Container>
      </section>
    )
  }
}
