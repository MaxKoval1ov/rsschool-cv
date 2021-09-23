import React, { Component } from 'react'
import './header.scss'
import { ArrowCircleDownIcon, ArrowCircleUpIcon, ArrowsExpandIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from './store/hooks/useTypedSelector'
import { CloseMenu, OpenMenu } from './store/types/headerState'

import "./burger.scss"

function activateBurger(){
  const burger:any = document.querySelector(".header__burger");
const menu:any = document.querySelector(".navig") ;
// const body:any = document.querySelector(".body");
// const slider:any= document.querySelector(".sidebar")

burger.addEventListener('click',function(){
    if(burger.classList.contains("active")){
    burger.classList.remove("active");
    menu.classList.remove("active");
    // body.classList.remove("lock");
    // if(slider)
    // slider.classList.remove("dsp_non")
    }
    else{
        burger.classList.add("active");
        menu.classList.add("active");
        // body.classList.add("lock");
        // if(slider)
        // slider.classList.add("dsp_non")
    }
  })
}

export default class Header extends Component<any,any> {
 componentDidMount(){
   const arrow = document.querySelectorAll('.arrows');
   const header:any = document.querySelector(".header");
   console.log(header);
   console.log(arrow);
  arrow.forEach((elem:any) => {
    elem.addEventListener('click', function (event:any) {
      arrow.forEach((element:any) => {
        element.classList.toggle('hide');
      });
      // event.classList.remove('hide');
      header.classList.toggle('closed');
    })
  })


  activateBurger();

 }
  render() {
    return (
      <header className = "header">
        <ul className="navig">
          <li><a className="nav-links" href="#Skills">Skills</a></li>
          <li><a className="nav-links" href="#Code">Code</a></li>
          <li><a className="nav-links" href="#Experience">Experience</a></li>
          <li><a className="nav-links" href="#Language">Language</a></li>
          <li><a className="nav-links" href="#Education">Education</a></li>
          <li><a className="nav-links" href="#Video">Video</a></li>
          <li><a className="nav-links" href="#Contacts">Contacts</a></li>
        </ul>
        <ArrowCircleUpIcon className="upArrow arrows"/>
        <ArrowCircleDownIcon className="downArrow arrows hide"/>
        <div className="header__burger">
             <span></span>
         </div>
      </header>
    )
  }
}
