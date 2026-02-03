import React from 'react';
import './Categories.css';

const categories = [
    {
        title: 'Order Online',
        description: 'Stay home and order to your doorstep',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop' // Pizza/Food
    },
    {
        title: 'Dining Out',
        description: 'View the city\'s favourite dining venues',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop' // Restaurant interior
    },
    {
        title: 'Nightlife and Clubs',
        description: 'Explore the city\'s top nightlife outlets',
        image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop' // Cocktails/Club
    }
];

const Categories = () => {
    return (
        <section className="categories-section container">
            {/* <h2 className="section-title">Collections</h2> Wait, title? Maybe generic? */}
            {/* Categories usually don't have a title "Categories" in Zomato, just the cards. */}

            <div className="categories-container">
                {categories.map((cat, index) => (
                    <div key={index} className="category-card">
                        <div className="category-img-wrapper">
                            <img src={cat.image} alt={cat.title} className="category-img" />
                        </div>
                        <div className="category-content">
                            <h3 className="category-title">{cat.title}</h3>
                            <p className="category-desc">{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
