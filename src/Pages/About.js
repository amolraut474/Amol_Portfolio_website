import React from 'react'
import Banner from '../Compontas/Banner-section/Banner';
import Aboutsection from '../Compontas/About_Com/A_about_section';
import Card from '../Compontas/Contact_Com/Card';
import Story from '../Compontas/About_Com/Story';
import Getintouch from '../Compontas/About_Com/Getintouch';
import Portfolio from '../Compontas/About_Com/Portfolio';
export default function About() {
  return (
    <div>

      <div><Banner About_title_one="ABOUT" About_title_two=" Me" About_para="Hello, I'm Amol Raut, a Web Developer passionate about crafting engaging online experiences. With expertise in HTML, CSS, JavaScript, Bootstrap, and React, I strive to create innovative and user-friendly websites that captivate audiences and drive results." /></div>
      <div><Aboutsection /></div>
      <div><Card /></div>
      <div><Story /></div>
      <div><Getintouch /></div>
    <div><Portfolio/></div>
    </div>
  )
}
