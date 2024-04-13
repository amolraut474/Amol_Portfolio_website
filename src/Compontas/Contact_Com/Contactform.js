import React, { useState } from 'react';
import './Contact.css';
const Contactform = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your form submission logic here
      console.log('Form submitted:', formData);
      // Reset form fields after submission
      setFormData({
         name: '',
         email: '',
         message: ''
      });
   };
   return (
      <div className='contact-form-section'>
         <div class="sec-dec"></div>
         <div class="pattern-bg right-pos"></div>
      <div className="contact-container">
      <h2 className='form-heading'>Get in Touch <span>Feel free to contact</span></h2>
         <p class="txt-secondary">Feel free to contact me via email, phone, or through the contact form provided on this page. I strive to respond to all inquiries promptly, usually within 24-48 hours.</p>
         <form className="contact-form" onSubmit={handleSubmit}>


            <div className='contact-form-fild'><span><i class="bi bi-person-plus-fill"></i></span><input
               type="text"
               id="name"
               name="name"
               placeholder="Name"
               value={formData.name}
               onChange={handleChange}
            />

            </div>
            <div className='contact-form-fild'>
            <span><i class="bi bi-envelope-fill"></i></span>
            <input
               type="email"
               id="email"
               name="email"
               placeholder=" Email"
               value={formData.email}
               onChange={handleChange}
            />
            </div>
            <div className='contact-form-fild'>
            <textarea
               id="message"
               name="message"
               rows="4"
               placeholder="message"
               value={formData.message}
               onChange={handleChange}
            />
            </div>
            <div className='form-submit'><button type="submit">Send Message </button></div>
         </form>
      </div>
      </div>
   );
};
export default Contactform;