import React, { useState } from 'react';
import './Portfolio.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const projects = [
  {
    id: 1,
    title: 'Project :  IT security services.',
    Environment: 'Environment :  HTML, CSS, Bootstrap and JavaScript.',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for IT security, which provides services like IT security awareness and cyber security. For this website, please refer. ',
    imageUrl: require('../Images/Project-23.png'),
    url: 'https://reflare.com/'
  },
  {
    id: 2,
    title: 'Project : Home maintenance service.',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for home building and home renovation, which provides services like home building, home renovation, or home maintenance. For this website, please refer.',
    imageUrl: require('../Images/Project-24.png'),
    url: 'https://erasproremodeling.com/',
  },
  {
    id: 3,
    title: 'Project :  Cleaning services.',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'This is the site for cleaning services, which provides services like house cleaning,Apartment cleaning, or office cleaning. For this website, please refer.',
    imageUrl: require('../Images/Project-8.png'),
    url: 'https://erasprocleaningservices.com/'
  },
  {
    id: 4,
    title: 'Project : React.js E-commerce website.',
    Environment: 'Environment :  HTML, CSS, Bootstrap, JavaScript, and React.js.',
    Role: 'Role : Web Developer.',
    description: 'Description : I have created this project for the purpose of a react.js demo.',
    imageUrl: require('../Images/Project-18.png'),
    url: 'https://amolraut474.github.io/React-e-commerce/'
  },
  {
    id: 5,
    title: 'Project : Portfolio landing page',
    Environment: 'Environment : HTML, CSS, Bootstrap,and JavaScript ',
    Role: 'Role : Web Developer.',
    description: 'I have created this project for the purpose of a study',
    imageUrl: require('../Images/Project-19.png'),
    url: 'https://amolraut474.github.io/Sample-live-website/'
  },
  {
    id: 6,
    title: 'Project : E-commerce website',
    Environment: 'Environment : HTML, CSS, Bootstrap,and JavaScript ',
    Role: 'Role : Web Developer.',
    description: 'Description : I have created this project for the purpose of a study',
    imageUrl: require('../Images/Project-20.png'),
    url: 'https://amolraut474.github.io/myProject/'
  },
  {
    id: 7,
    title: 'Project : Portfolio website',
    Environment: 'Environment : HTML, CSS, Bootstrap,and JavaScript ',
    Role: 'Role : Web Developer.',
    description: 'Description : I have created this project for the purpose of a study',
    imageUrl: require('../Images/Project-21.png'),
    url: 'https://amolraut474.github.io/Portfolio-Designing/'
  },
  {
    id: 8,
    title: 'Project : WordPress E-commerce website',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for WordPress E-commerce, which provides services for E-commerce products, sales, and buyers. For this website, please refer.',
    imageUrl: require('../Images/Project-10.png'),
    url: 'https://blaidshearing.com/'
  },
  {
    id: 9,
    title: 'Project : Concierge Savant site',
    Environment: 'Environment :  Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique Concierge Savant site, including payment configuration and shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-11.png'),
    url: 'https://concierge-savant.myshopify.com/'
  },


  {
    id: 10,
    title: 'Project : Construction Services ',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description :  This is the site for construction services site, including payment configuration and shipping configuration using react.js FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-9.png'),
    url: 'https://falconusa.net/'
  },
  {
    id: 11,
    title: 'Project : CLEANING SERVICES.',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for cleaning services, which provides services like house cleaning,Apartment cleaning, or office cleaning. For this website, please refer.',
    imageUrl: require('../Images/Project-5.png'),
    url: 'https://example.com/project1'
  },
  {
    id: 12,
    title: 'Project : Cash home buyers site',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description :This is the site for Cash home buyers site, which provides services likehome buyers services. For this website, please refer.',
    imageUrl: require('../Images/Project-7.png'),
    url: 'https://simplecashhomebuyers.com/'
  },
  {
    id: 13,
    title: 'Project : SILVER CITY MARKETING',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for marketing services site, which provides services like marketing services. For this website, please refer.',
    imageUrl: require('../Images/Project-6.png'),
    url: 'https://example.com/project1'
  },
  {
    id: 14,
    title: 'Project : Med Solutions',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for Med Solutions site, which provides services like Med Solutions Professional Staffing services. For this website, please refer.',
    imageUrl: require('../Images/Project-2.png'),
    url: 'https://medsolutionspro.com/'
  },
  {
    id: 15,
    title: 'Project :  Manufacturing business.',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for manufacturing business informatics, which provides services like business transformation services. For this website, please refer.',
    imageUrl: require('../Images/Project-4.png'),
    url: 'https://alphanovaconsulting.com/'
  },
  {
    id: 16,
    title: 'Project : Space Commerce',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the site for Space Commerce and Finance, which provides services like Space Commerce and Finance services. For this website, please refer.',
    imageUrl: require('../Images/Project-3.png'),
    url: 'https://cscf.space/'
  },
  {
    id: 17,
    title: 'Project : wholesaving site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique wholesaving  site , including payment configuration, shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-22.png'),
    url: 'https://wholesaving.com.au/'
  },
  {
    id: 18,
    title: 'Project : JS E-COMMERCE WEBSITE.',
    Environment: 'Environment :HTML, CSS, and JavaScript.  ',
    Role: 'Role : Web Developer.',
    description: 'Description : I have created this project for the purpose of a js demo',
    imageUrl: require('../Images/Project-25.png'),
    url: 'https://amolraut474.github.io/JavaScript-ecommerce-site/'
  },
  {
    id: 19,
    title: 'Project : Boom Sauce ATX  site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : The Boom Sauce ATX website is a one-of-a-kind platform, meticulously crafted to deliver a seamless online shopping experience. For this website, please refer to',
    imageUrl: require('../Images/Project-17.png'),
    url: 'https://www.boomsauceatx.com/'
  },
  {
    id: 20,
    title: 'Project : Boom Sauce ATX  site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : The somic website is a one-of-a-kind platform, meticulously crafted to deliver a seamless online shopping experience. For this website, please refer to',
    imageUrl: require('../Images/Project-16.png'),
    url: 'https://somic.com.au/'
  },
  {
    id: 21,
    title: 'Project : findyourbliss site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : The findyourbliss website is a one-of-a-kind platform, meticulously crafted to deliver a seamless online shopping experience and information about the product. For this website, please refer to',
    imageUrl: require('../Images/Project-15.png'),
    url: 'https://findyourbliss.co/'
  },
  {
    id: 22,
    title: 'Project : Craighead site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : Craighead Custom Homes about and crafted deliver experience For Homes information is meticulously of one-of-a-kind online platform please product refer seamless shopping The this to website.',
    imageUrl: require('../Images/Project-14.png'),
    url: 'https://craigheadcustomhomes.com/'
  },
  {
    id: 23,
    title: 'Project : Ribit Boats site',
    Environment: 'Environment : Shopify',
    Role: 'Role : Web Developer.',
    description: 'Description : The Ribit Boats website is a one-of-a-kind platform, meticulously crafted to deliver a seamless online shopping experience and information about the product. For this website, please refer to',
    imageUrl: require('../Images/Project-13.png'),
    url: 'https://ribitboats.com/'
  },
  {
    id: 24,
    title: 'Project : Bonnie and Pop celebration and gifting site',
    Environment: 'Environment :  Shopify ',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique gifting site in food, including, shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-12.png'),
    url: 'https://www.bonnieandpop.com/'
  },
  {
    id: 25,
    title: 'Project : Marketing Company site',
    Environment: 'Environment : WordPress',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the website of a unique marketing company, offering information and a range of marketing services. For further details, please refer to our website.',
    imageUrl: require('../Images/Project-26.png'),
    url: 'https://leadvips.com/'
  },
  {
    id: 26,
    title: 'Project : Mealkraft site',
    Environment: 'Environment : WordPress',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique Mealkraft site in food, including, shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-27.png'),
    url: 'https://mealkraft.ca/'
  },
  {
    id: 28,
    title: 'Project : Car Book  site',
    Environment: 'Environment :  WordPress',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the unique Car Book site, offering comprehensive car booking services. For further information, please refer to our website.',
    imageUrl: require('../Images/Project-28.png'),
    url: 'https://curacao.starrentacar-lease.com/'
  },
  {
    id: 29,
    title: 'Project : Caring Heartes Car site',
    Environment: 'Environment :  WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the website for Caring Heartes Car, offering a variety of services tailored to your needs. For further information, please refer to this website.',
    imageUrl: require('../Images/Project-29.png'),
    url: 'https://rinagolan.co/  '
  },
  {
    id: 30,
    title: 'Project : medicine site',
    Environment: 'Environment : WordPress ',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the unique medicine website providing information and services related to medicine. For further details, please refer to our website.',
    imageUrl: require('../Images/Project-30.png'),
    url: 'https://www.bonnieandpop.com/'
  },
  {
    id: 31,
    title: 'Project : Balloons gifting site',
    Environment: 'Environment : WordPress',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the unique balloons website, providing information and services related to balloons. For further details, please refer to our website.',
    imageUrl: require('../Images/Project-31.png'),
    url: 'https://gidiballoons.com/home_new/'
  },
  {
    id: 32,
    title: 'Project : Digital Solutions site',
    Environment: 'Environment : WordPress',
    Role: 'Role : Web Developer.',
    description: 'Description : This is the unique Digital Solutions site, offering information and services related to digital solutions. For further details, please refer to our website.',
    imageUrl: require('../Images/Project-32.png'),
    url: 'https://v2.voltihost.com/'
  },
  {
    id: 33,
    title: 'Project : Drone technology',
    Environment: 'Environment :  Shopify ',
    Role: 'Role : Web Developer.',
    description: 'Description : Explore our unique drone technology solutions for everyday business operations, featuring advanced shipping configurations powered by FedEx services. For details, visit our website.',
    imageUrl: require('../Images/Project-33.png'),
    url: 'https://candrone.com/'
  },
  {
    id: 34,
    title: 'Project : the alchempist',
    Environment: 'Environment :  Shopify ',
    Role: 'Role : Web Developer.',
    description: 'We are the unique alchemist in CBD products, offering a range of solutions, including shipping configurations using FedEx. For more information, please refer to our website.',
    imageUrl: require('../Images/Project-34.png'),
    url: ' https://www.thealchempist.com/'
  },
  {
    id: 35,
    title: 'Project : Naturopress site',
    Environment: 'Environment :  Shopify ',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique Water Filters site in , including, shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-35.png'),
    url: 'https://naturopress.com.au/'
  },
  {
    id: 36,
    title: 'Project : griffy sorganics',
    Environment: 'Environment :  Shopify ',
    Role: 'Role : Web Developer.',
    description: 'Description : It is the unique gifting site in, including, shipping configuration using FedEx. For this website, please refer to',
    imageUrl: require('../Images/Project-36.png'),
    url: ' https://griffysorganics.com/'
  },


  // Add more projects as needed
];

const PortfolioSection = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState('All');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleEnvironmentChange = (environment) => {
    setSelectedEnvironment(environment);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);

  const filteredProjects = selectedEnvironment === 'All' ? projects : projects.filter(project => project.Environment.includes(selectedEnvironment));
  return (
    <div className='portfolio-section-container'>
      {isMobileView ? (
        <select value={selectedEnvironment} onChange={(e) => handleEnvironmentChange(e.target.value)}>
          <option value="All">All</option>
          <option value="WordPress">WordPress</option>
          <option value="HTML">HTML</option>
          <option value="Shopify">Shopify</option>
          <option value="React.js">React.js</option>
        </select>
      ) : (
        <div className="filter-buttons">
          <button onClick={() => handleEnvironmentChange('All')}>All</button>
          <button onClick={() => handleEnvironmentChange('WordPress')}>WordPress</button>
          <button onClick={() => handleEnvironmentChange('HTML')}>HTML</button>
          <button onClick={() => handleEnvironmentChange('Shopify')}>Shopify</button>
          <button onClick={() => handleEnvironmentChange('React.js')}>React.js</button>
        </div>
      )}
      <div className="portfolio">
        {/* Projects */}
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-details">
              <h3 className='form-heading'>{project.title}</h3>
              <p className="txt-secondary">{project.description}</p>
              <h5 class="txt-secondary">{project.Environment}</h5>
              <h5 class="txt-secondary">{project.Role}</h5>
              <div className='project-btn'>
                <Link to={project.url} target="_blank" rel="noopener noreferrer" className="cus-inner-head-link color-bg">
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
