import React from 'react'
import '../Newsletter-form/Newsletter.css';
export default function Newsletter() {
  return (
    <main class="container-sction">
      <div class="newsletter">


        <div class="txt-holder">
          <p class="txt-primary">Subscribe to our Newsletter</p>
          <p class="txt-secondary">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
           I created web design for many famous brand companies.</p>
        </div>
        <form action="#">
          <input type="email" name="email" id="email" placeholder="Your Email" class="form-control" />
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>

      <div className='footer-last'>
      <div className='footer-bottom-se'>
          <p class="copy text-center">COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY <span class="e-f">AMOL</span>
          
          </p>
          <span><button class="btn" type="submit">Back to Top</button></span>
          
        </div>
    </div>
    </main>
    

  )
}