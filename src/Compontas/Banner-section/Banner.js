import React from 'react';
import './Banner.css';
export default function Banner(props) {
    return (
        <div className='Hero-section'>
            <div class="overlay"></div>
            <h2 className='form-heading'>
            {props.About_title_one}{props.Contact_title_one}<span>{props.About_title_two}{props.Contact_title_two}</span></h2>
            <p class="txt-secondary">{props.About_para} {props.Contact_para}</p>
        </div>
    )
}