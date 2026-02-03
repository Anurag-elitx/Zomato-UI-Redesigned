import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    zomato
                </a>

                {scrolled && (
                    <div className="navbar-search-wrapper">
                        <div className="navbar-search">
                            <div className="location-input">
                                <FaMapMarkerAlt color="#ef4f5f" />
                                <input type="text" placeholder="Bangalore" />
                            </div>
                            <div className="search-input">
                                <FaSearch color="#828282" />
                                <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                            </div>
                        </div>
                    </div>
                )}

                <div className="navbar-auth">
                    <a href="#" className="nav-link">Log in</a>
                    <a href="#" className="nav-link">Sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
