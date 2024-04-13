import React from 'react'
import './Card.css';
const cardsData = [
    {
        icon: <i class="bi bi-telephone-outbound-fill"></i>,
        title: 'Our Phone',
        description: 'Feel free to get in touch with us.',
        descriptionlast: '+9665158535',
    },
    {
        icon: <i class="bi bi-envelope-at-fill"></i>,
        title: 'Our E-mail',
        description: 'Feel free to get in touch with us.',
        descriptionlast: 'amolraut474@gmail.com',
    },
    {
        icon: <i class="bi bi-pin-map-fill"></i>,
        title: 'Our Location',
        description: 'WARJE,PUNE ,MAHARASHTRA 411058.',
        descriptionlast: 'Phone Contacts:+9665158535',
    },
  

];
const CardSection = ({ cards }) => {
    return (
        <div class="card-container">
            <div class="card-row">

                {cards.map((card, index) => (
                    <div key={index} className="Custom_Card">
                        <span class="card-item_num">01.</span>
                        <div><h2 class="card-icon-c">{card.icon}</h2></div>
                        <div className='card-title-box'><h2 class="card-title">{card.title}</h2>
                            <p className='card-desciption'>{card.description}</p><p className='last-des'>{card.descriptionlast}</p></div>

                    </div>
                ))}
            </div>
        </div>


    );
};
function Card() {
  return (
    <div class="card-section">
         
            <CardSection cards={cardsData} />
        </div>
  )
}

export default Card;