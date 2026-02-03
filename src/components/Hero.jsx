import React from 'react';
import { FaMapMarkerAlt, FaSearch, FaCaretDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                className="hero-bg"
            />

            <div className="hero-content">
                <div className="hero-logo">zomato</div>
                <h1 className="hero-title">Discover the best food & drinks in Bangalore</h1>

                <div className="hero-search-container">
                    <div className="hero-location">
                        <FaMapMarkerAlt color="#ef4f5f" size={20} />
                        <input type="text" placeholder="Bangalore" />
                        <FaCaretDown color="#363636" />
                    </div>
                    <div className="hero-search">
                        <FaSearch color="#828282" size={18} />
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
