// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Services />
            <TechStack />
            <Features />
            <Projects />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;
