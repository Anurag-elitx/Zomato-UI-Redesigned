import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import './Collections.css';

const collections = [
    {
        title: 'Newly Opened',
        places: '12 Places',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Trending This Week',
        places: '30 Places',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop'
    },
    {
        title: 'Best of Bangalore',
        places: '116 Places',
        image: 'https://images.unsplash.com/photo-1596221230358-002d7339d67a?q=80&w=2072&auto=format&fit=crop'
    },
    {
        title: 'Great Cafes',
        places: '29 Places',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978&auto=format&fit=crop'
    }
];

const Collections = () => {
    return (
        <section className="collections-section container">
            <div className="collections-header">
                <h2 className="section-title">Curated Collections</h2>
                <div className="collections-title-row">
                    <p className="section-subtitle" style={{ marginBottom: 0 }}>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Bangalore, based on trends
                    </p>
                    <a href="#" className="view-all-link">
                        All collections in Bangalore <FaCaretRight />
                    </a>
                </div>
            </div>

            <div className="collections-grid">
                {collections.map((item, index) => (
                    <div key={index} className="collection-card">
                        <img src={item.image} alt={item.title} className="collection-bg" />
                        <div className="collection-overlay">
                            <h3 className="collection-title">{item.title}</h3>
                            <div className="collection-places">
                                {item.places} <FaCaretRight />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collections;
