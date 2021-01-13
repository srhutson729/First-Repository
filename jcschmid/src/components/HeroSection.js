import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import JSHeadshot from "./JSHeadshot.png"

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={JSHeadshot} width={450} height={350} mode='fit' />
      <p style={{color:'black'}}>Bio</p>
      <h2 style={{color:'black'}}>Insert short bio here</h2>
    </div>
  );
}

export default HeroSection;