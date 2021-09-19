import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav justify-content-center">
          <a className="nav-link" href="#Skills">Skills</a>
          <a className="nav-link" href="#Code">Code</a>
          <a className="nav-link" href="#Experience">Experience</a>
          <a className="nav-link" href="#Language">Language</a>
          <a className="nav-link" href="#Education">Education</a>
          <a className="nav-link" href="#Video">Video</a>
          <a className="nav-link" href="#Contacts">Contacts</a>
        </nav>
      </div>
    )
  }
}
