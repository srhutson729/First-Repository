import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import JSHeadshot2 from "./JSHeadshot2.jpg";

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={JSHeadshot2} width={400} height={350} mode='fit' class='headshot'/>
      <p>Welcome! My name is Joe</p>
    </div> 
  );
}

export default HeroSection;