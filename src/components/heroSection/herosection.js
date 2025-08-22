import React from 'react';
import './herosection.css';
import logo  from '../../images/logo.png'; 
import { IoTerminalOutline } from "react-icons/io5";
import { TypingDescription } from './TypingDescription';

export const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <img className="hero-logo" src={logo} alt="logo"/>
                <p className="hero-name">Fahad Iqbal</p>
                <p className='hero-description'>
                  <span className='hero-span'>&gt;&gt;</span>
                  <TypingDescription text={'Turning complex logic into seamless performance — I’m the engine behind the interface.'} />
                </p>
                <p className='hero-occupation'><span className='hero-termial-icon'><IoTerminalOutline/></span>backend_developer</p> 
            </div>
        </section>
    );
}