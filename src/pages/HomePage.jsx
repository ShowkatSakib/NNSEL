import React from 'react';

import AboutSection from '../components/About';
import InteriorDesignPage from '../components/InteriorDesignPage';


export default function Home() {
  return (
    <div className="bg-[#000000] min-h-screen" style={{ fontFamily: "'Onest', system-ui, sans-serif" }}>

      <div id="about">
        <AboutSection />
      </div>

    </div>
  );
}
