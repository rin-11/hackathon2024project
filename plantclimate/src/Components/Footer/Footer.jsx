// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 
import homeIcon from './Assets/home.png';
import searchIcon from './Assets/search.png';
import communityIcon from './Assets/community.png';
import profileIcon from './Assets/profile.png';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-icon">
                <Link to="/">
                <img src={homeIcon} alt="home-icon" />
                    <div className="label">Home</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/plants">
                    <img src={searchIcon} alt="search-icon" />
                    <div className="label">Search</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/news">
                <img src={communityIcon} alt="community-icon" />
                    <div className="label">Community</div>
                </Link>
            </div>
            <div className="footer-icon">
                <Link to="/profile">
                <img src={profileIcon} alt="profile-icon" />
                    <div className="label">Profile</div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
