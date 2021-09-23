import React, { Component } from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import school from './school.png'
import git from './git.png'
import linkIn from './linkin.png'


export default class Footer extends Component {
  render() {
    return (
      <footer className = "footer" id = "footer">
        <p>© 2021 by Maksim Kovaliov</p>
        <Container>
          <Col><a className = "footer-link" href="https://www.linkedin.com/in/max-k-448558220/"><img className = "footer_img git" src={linkIn} alt="smth got wrong" /></a></Col>
          <Col><a className = "footer-link" href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/cv/cv.md"><img className = "footer_img git" src={git} alt="smth got wrong" /></a></Col>
          <Col><a className = "footer-link" href="https://app.rs.school/"><img className = "footer_img" src={school} alt="smth got wrong" /></a></Col>
        </Container>
      </footer>
    )
  }
}
