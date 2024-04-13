import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import Sidebar from '../Sidebar/Sidebar';
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='header-section'>
    <div className='logo-main-part'>
    <div className='site-logo'>
        <img src='../Images/Logo.png' alt='Logo'/>
    </div>
    <div className='Lets-Talk'>
      <button>Lets Talk</button>
    </div>

    <div className='mobile-sidebar'><Sidebar/></div>
    </div>
    <div className='toggle-container'>
      <button 
        className={`toggle-button-header ${isToggled ? 'on' : 'off'}`} 
        onClick={handleToggle}
      >
        {isToggled ? 'X' : 'Share'}
      </button>
      {isToggled && (
        <ul>
          <li><Link to="https://www.linkedin.com/in/amol-aut- 782555214" target="_blank"><i class="bi bi-instagram"></i></Link></li>
          <li><Link to="https://www.linkedin.com/in/amol-aut- 782555214" target="_blank"><i class="bi bi-linkedin"></i></Link></li>
          <li><Link to="https://www.linkedin.com/in/amol-aut- 782555214" target="_blank"><i class="bi bi-facebook"></i></Link></li>
          <li><Link to="https://www.linkedin.com/in/amol-aut- 782555214" target="_blank"><i class="bi bi-whatsapp"></i></Link></li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default ToggleButton;