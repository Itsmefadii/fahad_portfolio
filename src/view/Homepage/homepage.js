import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HeroSection } from "../../components/heroSection/herosection";
import About from "../../components/aboutMe/about";
import Projects from "../../components/projects/projects";
import Contact from "../../components/contact/contact";

export const Home = () => {
    return  (
        <>
        <Navbar/>
        <HeroSection/>
        <About/>
        <Projects/>
        <Contact/>
        </>
    )
}

