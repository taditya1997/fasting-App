import React from 'react';
import image from "./diet.svg";
import {Button } from 'react-bootstrap';
const Home = (props) => {
    return (
        
        <div className="Home">
        <div className="image">
        <img src={image} />
        <div className="description">
        <h2>Start Your Fasting Journey</h2>
        <Button variant="outline-secondary">Sign Up</Button>{' '}
        </div>
        
        </div>
        </div>
    );
};

export default Home;