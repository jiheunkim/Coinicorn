import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { useState } from 'react';


function HeroSection() {

    let [heart, heartChange] = useState(0); // 초기값 0

    return (
        <div className = 'hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>LikeLion Team Project</h1>
            <p>가상화폐</p>
            <p><span onClick={()=>{heartChange(heart+1)}}>❤</span> { heart }</p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>GET STARTED</Button>
                 <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>WATCH TRAILER<i className = 'far fa-play-circle'/></Button>
            </div>
               
        </div>
    )
}

export default HeroSection