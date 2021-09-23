import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import photo from './rs-app_train.jpg'
import react from './react.png'
import typeImg from '/typescript.png'
import redux from './redux.png'
import "./about.scss"
import { Container,Col, Row } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <section id = "About" className = "justify-content-centre">
        <Container>
          <Row className = "mt-2">
            <Col md = '6'>
              <div className="image-wrapper">
                <Image src={photo}  roundedCircle  height="300" width="300" alt = "smth got wrong"/>
              </div>
            </Col>
            <Col md = '6' className = "about-text mb=6"  as = "article">
              <Row>
                <p>Hi, my name is <span className="name">Maksim</span></p>
              </Row>
              <Row>
                <h3>Some facts about<span className="name"> me</span>:</h3>
              </Row>
              <Row as = 'q'>
                <p className = "description__item">I am 19 years old</p>
              </Row>
              <Row as = 'q'>
                <p className = "description__item">I am a Junior Front End Developer</p>
              </Row>
              <Row as = 'q'>
                <p className = "description__item">My current location is Minsk</p>
              </Row>
              <Row as = 'q'>
                <p className = "description__item">I admire power lifting and listening to russian post-punk music</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
