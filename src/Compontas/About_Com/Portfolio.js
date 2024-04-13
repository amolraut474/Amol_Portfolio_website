import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './Portfolio.css';

const skillsData = [
  { skill: 'HTML', level: 95 },
  { skill: 'CSS', level: 80 },
  { skill: 'JavaScript', level: 70 },
  { skill: 'Bootstrap', level: 80 },
  { skill: 'React', level: 70 },
  { skill: 'WordPress', level: 80 },
  { skill: 'Shopify', level: 80 },
  { skill: ' GitHub', level: 80 },
  // Add more skills as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <div className='contact-form-section'>
         <div class="sec-dec"></div>
            <div className="contact-container">
                <h2 className='form-heading'>MY <span>Skills and Abilities</span></h2>
                <p class="txt-secondary">Proficient in HTML, CSS, and JavaScript for creating responsive and visually appealing web experiences.</p>

            </div>
           
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2 className='skill-title'>{skill.skill}</h2>
            <div className="progressbar-wrapper">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: '#999',
                  pathColor: '#f7b90f',
                  trailColor: '#3f3f44',
                })}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;