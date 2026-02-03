import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">zomato</div>
                    <div className="footer-controls">
                        <button className="footer-btn">
                            India <FaGlobe />
                        </button>
                        <button className="footer-btn">
                            English
                        </button>
                    </div>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h4>About Zomato</h4>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Work With Us</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Report Fraud</a></li>
                            <li><a href="#">Press Kit</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Zomaverse</h4>
                        <ul>
                            <li><a href="#">Zomato</a></li>
                            <li><a href="#">Blinkit</a></li>
                            <li><a href="#">Feeding India</a></li>
                            <li><a href="#">Hyperpure</a></li>
                            <li><a href="#">Zomato Land</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>For Restaurants</h4>
                        <ul>
                            <li><a href="#">Partner With Us</a></li>
                            <li><a href="#">Apps For You</a></li>
                        </ul>
                        <h4 style={{ marginTop: '1.5rem' }}>For Enterprises</h4>
                        <ul>
                            <li><a href="#">Zomato For Enterprise</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Learn More</h4>
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Social Links</h4>
                        <div className="social-links">
                            <span className="social-icon"><FaLinkedinIn /></span>
                            <span className="social-icon"><FaInstagram /></span>
                            <span className="social-icon"><FaTwitter /></span>
                            <span className="social-icon"><FaYoutube /></span>
                            <span className="social-icon"><FaFacebookF /></span>
                        </div>
                        {/* App Store Links would go here */}
                    </div>
                </div>

                <div className="footer-divider"></div>
                <p className="footer-copyright">
                    By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
