import React from 'react';
import { Link } from 'react-router-dom';
import './Story.css';
export default function Story() {
    const handleDownloadResume = () => {
        // Replace 'resume.pdf' with the path to your resume file
        const resumePath = require('../Images/(Resume).pdf');
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Amol(Resume).pdf'; // Change 'YourNameResume.pdf' to the desired name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='Story-section'>
        <div className='contact-form-section'>
            <div class="sec-dec"></div>
            {/* <div class="pattern-bg right-pos"></div> */}
            <div className="contact-container">
                <h2 className='form-heading'>MY <span>AWESOME STORY</span></h2>
                <p class="txt-secondary">As a web developer, my journey is a fusion of code, creativity, and continuous learning. From my first encounter with HTML to mastering the intricacies of JavaScript frameworks, every line of code I write is a step forward in crafting seamless digital experiences. With each project, I challenge myself to innovate, solve problems, and push the boundaries of what's possible on the web. Join me as I navigate the ever-evolving landscape of technology, driven by a passion for creating impactful online solutions.</p>

            </div>

            <div className='Story-container'>
                <div className='Story-row'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-backpack2-fill"></i></h2></div><div class="card-title-box"><h2 class="card-title">completed my secondary education</h2><p class="card-desciption">2014-2016</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>I completed my secondary education by passing the 12th grade.</h4>
                    <p> This foundational academic journey provided me with essential knowledge and skills that laid the groundwork for my future endeavors. While completing my 12th grade, I focused on subjects that aligned with my interests and aspirations, setting the stage for further academic and professional growth.</p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='Story-row'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-backpack4"></i></h2></div><div class="card-title-box"><h2 class="card-title">Bachelor of Computer Applications 'BCA' degree</h2><p class="card-desciption">2016-2019</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>completed Computer Applications 'BCA'</h4>
                    <p>After completing my secondary education by passing the 12th grade, I pursued a Bachelor of Computer Applications BCA degree. This comprehensive program equipped me with a strong foundation in computer science and its applications. Throughout my BCA studies, I delved into various subjects such as programming languages, database management, software engineering, and web development. </p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='Story-row row-last'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-award"></i></h2></div><div class="card-title-box"><h2 class="card-title">Journey as a web developer</h2><p class="card-desciption">2012-2017</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>Journey as a web developer</h4>
                    <p>Experienced Web Developer with 2+ years of hands-on experience in HTML, CSS, JavaScript, Bootstrap, React, WordPress, GitHub, and Shopify. Proven ability to create responsive and visually appealing websites, utilizing front-end frameworks and content management systems. Skilled in collaborating with stakeholders to deliver projects on time and within budget. Passionate about staying updated with emerging web technologies and trends. </p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='download-button'>
                    <button onClick={handleDownloadResume} className="cus-inner-head-link color-bg">Download Resume</button>
                </div>
            </div>
        </div>
        </div>
    )
}
