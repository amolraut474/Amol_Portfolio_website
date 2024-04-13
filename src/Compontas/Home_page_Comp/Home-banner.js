import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
function AutoCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>

            <div className='Slide-1'>
                <div class="hero-item">
                    <h3 className='top-dec'>WELCOME TO MY Portfolio</h3>
                    <h2 className='slider-heading'> Hi, I’m Amol raut<br /> I am a Front-end Developer</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>Highly skilled and seasoned Front End Developer with a passion for crafting immersive and intuitive user experiences</p>
                    <Link to="/Portfolio">
                        <button className="btn" type="button">View Project</button>
                    </Link>
                </div>
                <div class="overlay"></div>
            </div>
            <div className='Slide-2'>
                <div class="hero-item">
                    <h3 className='top-dec'>WELCOME TO MY</h3>
                    <h2 className='slider-heading'> Hi, I’m Amol raut<br /> I am a Web Developer</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>With a proven track record of delivering exceptional results, I bring a wealth of expertise in HTML, CSS, JavaScript, and front-end frameworks like React.</p>
                    <Link to="/Portfolio">
                        <button className="btn" type="button">View Project</button>
                    </Link>
                </div>
                <div class="overlay"></div>
            </div>
            <div className='Slide-3'>
                <div class="hero-item">
                    <h3 className='top-dec'>WELCOME TO MY</h3>
                    <h2 className='slider-heading'>Hi, I’m Amol raut<br /> I am a Wordpress Developer</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>My proficiency extends to responsive design implementation, ensuring seamless functionality across all devices and screen sizes.</p>
                    <Link to="/Portfolio">
                        <button className="btn" type="button">View Project</button>
                    </Link>
                </div>
                <div class="overlay"></div>
            </div>

            <div className='Slide-4'>
                <div class="hero-item">
                    <h3 className='top-dec'>Hi, I’m Amol raut</h3>
                    <h2 className='slider-heading'> Hi, I’m Amol raut<br /> I am a Shopify Developer</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>My proficiency extends to responsive design implementation, ensuring seamless functionality across all devices and screen sizes.</p>
                    <Link to="/Portfolio">
                        <button className="btn" type="button">View Project</button>
                    </Link>
                </div>
                <div class="overlay"></div>
            </div>

            {/* Add more slides as needed */}
        </Slider>
    );
}

export default AutoCarousel;