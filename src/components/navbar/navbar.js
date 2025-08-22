import React from "react";
import { useState } from "react";
import './navbar.css';
import logo from '../../images/logo.png'; 
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('side-menu')) {
            setIsOpen(false);
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo-container">
                    <img className="navbar-logo" src={logo} alt="logo" />
                </div>

                <ul className="navbar-links">
                    <li className="navbar-list"><a className="navbar-anchor" href="#home">Home</a></li>
                    <li className="navbar-list"><a className="navbar-anchor" href="#about">About</a></li>
                    <li className="navbar-list"><a className="navbar-anchor" href="#projects">Projects</a></li>
                    <li className="navbar-list"><a className="navbar-anchor" href="#contact">Contact</a></li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
                    <IoMdMenu className="navbar-icon" />
                </button>

                <div className={`side-menu${isOpen ? ' open' : ''}`} onClick={handleOverlayClick}> 
                    <ul className="side-menu-links">
                        <li className="navbar-list"><a className="navbar-anchor" href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li className="navbar-list"><a className="navbar-anchor" href="#about" onClick={handleLinkClick}>About</a></li>
                        <li className="navbar-list"><a className="navbar-anchor" href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li className="navbar-list"><a className="navbar-anchor" href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="navbar-spacer"></div>
        </>
    );
}