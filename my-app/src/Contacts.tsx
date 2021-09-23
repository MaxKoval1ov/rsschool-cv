import React, { Component } from 'react'

const styles:any = {
  " &:before": {
    num:1,
    position:"absolute",
    content: `url(${require("./arrow.png")})`,
    display:"block",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    width:"10px",
    height:"17px",
    top:0,
    left:0,
    transform:"translateY(50%)",
  },
}

export default class Contacts extends Component {


  render() {
    return (
      <section className = "Contacts" id = "Contacts">
        <h2>Contacts:</h2>
        <ul className = "contact_list">
          <li style = {styles} className = "contact">Minsk,Belarus</li>
          <li style = {styles} className = "contact">+375291205051</li>
          <li style = {styles} className = "contact"><a className = 'contact-link' href="https://t.me/maksimneat">Telegram</a></li>
          <li style = {styles} className = "contact"><a className = 'contact-link' href="https://vk.com/id150260212">Vk</a></li>
          <li style = {styles} className = "contact"><a className = 'contact-link' href="https://www.instagram.com/maksim_kavaliou/">Instagram</a></li>
        </ul>
      </section>
    )
  }
}
