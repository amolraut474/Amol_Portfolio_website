import React from 'react';
import { Link } from 'react-router-dom';
import './Img_text.css';
export default function Aboutsection() {
  return (
    <div className='image_with_text_section'>
      <div className='image-with-text-row'>
        <div className='image-with-text-col-1'>
          <div>
            <div class="about-image fl-wrap">
              <img src={require('../Images/About.png')} alt='name' />
              <div class="ab_cirle-dec" ></div>
            </div>
          </div>
        </div>
        <div className='image-with-text-col-2'>

          <div class="txt-holder">
            <p class="txt-primary">Welcome to my bio!</p>
            <p class="txt-secondary">I'm Amol Raut, a passionate Web Developer dedicated to creating captivating online experiences. </p>
            <p class="txt-secondary port-last-text">My journey in the world of web development has been fueled by a relentless pursuit of excellence and a love for crafting innovative solutions. With expertise in HTML, CSS, JavaScript, Bootstrap, and React, I bring ideas to life through seamless and user-friendly websites.

              Beyond coding, I thrive on the thrill of problem-solving and the challenge of staying at the forefront of technological advancements. Each project I undertake is an opportunity to push boundaries, learn, and grow.

              Join me as I continue to explore the ever-evolving landscape of web development, driven by a commitment to excellence and a passion for creating impactful digital experiences. Let's connect and embark on this exciting journey together!</p>
            <div class="line-dec fl-wrap"></div>
            <div>
              <Link to="/Portfolio">
                <button className="btn" type="button">View Project</button>
              </Link>
            </div>
            <div class="pattern-bg right-pos"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
