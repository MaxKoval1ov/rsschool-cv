import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import photo from './rs-app_train.jpg'

export default class About extends Component {
  render() {
    return (
      <section id = "About" className = "justify-content-centre">
        <Image src={photo}  roundedCircle fluid/>
      </section>
    )
  }
}
