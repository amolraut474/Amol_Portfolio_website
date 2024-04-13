import React from 'react';
import { Link } from 'react-router-dom';
import './Getintouch.css';
export default function Getintouch() {
    return (
        <div>
            <div class="Getintouch-section">
                <div class="Getintouch-row">
                    <div class="Getintouch-col">
                        <h4>Ready to order your project ?</h4>
                    </div>
                    <div class="Getintouch-col-2">
                        <Link to="/Contact" class="cus-inner-head-link color-bg">Get In Touch</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
