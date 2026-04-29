import React from 'react';

import AboutSection from '../components/About';
import InteriorDesignPage from '../components/InteriorDesignPage';


import HeroSlider from '../components/HeroSlider';
import TeamSection from '../components/sections/TeamSection';
import NewsSection from '../components/sections/NewsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSlider />
      </section>

      <div className="bg-[#000000] min-h-screen" style={{ fontFamily: "'Onest', system-ui, sans-serif" }}>

      <div id="about">
        <AboutSection />
      </div>

    </div>


      <section id="team">
        <TeamSection />
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
