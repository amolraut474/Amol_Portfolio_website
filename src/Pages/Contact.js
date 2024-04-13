import React from 'react'
import Contactform from '../Compontas/Contact_Com/Contactform';
import Card from '../Compontas/Contact_Com/Card';
import Banner from '../Compontas/Banner-section/Banner';
export default function Contact() {
  return (
    <div>
      <Banner Contact_title_one="MY" Contact_title_two=" CONTACTS" Contact_para="Whether you're interested in discussing a potential project, seeking advice, or just want to say hello, I'm eager to hear from you. Let's work together to bring your ideas to life!." />
      <Card/>
      <Contactform/>

    </div>
  )
}