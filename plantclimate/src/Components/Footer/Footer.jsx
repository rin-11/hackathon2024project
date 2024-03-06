// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-icon">
                <Link to="/">
                    <div className="icon"></div> 
                    <div className="label">Home</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/plants">
                    <div className="icon"></div> 
                    <div className="label">Search</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/news">
                    <div className="icon"></div> 
                    <div className="label">Community</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/profile">
                    <div className="icon"></div> 
                    <div className="label">Profile</div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
