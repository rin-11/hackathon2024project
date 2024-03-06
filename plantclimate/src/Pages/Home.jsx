// HomePage.jsx
import React from 'react';
import MyPlants from '../Components/Plants/MyPlants';
import MyNews from '../Components/Articles/MyNews';

const HomePage = () => {
    return (
            <div className="app-sections">
                <section className="section">
                    <MyPlants />
                </section>
                <section className="section">
                    <MyNews />
                </section>
            </div>
    );
};

export default HomePage;
