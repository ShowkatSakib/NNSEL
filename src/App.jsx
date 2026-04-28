import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// We've updated the path to look inside the "pages" folder!
import Home from "./pages/Home"; 

import About from "./components/About";
import Contact from "./components/Contact";
import InteriorDesignPage from "./components/InteriorDesignPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Your full scrolling landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Your standalone routes */}
        <Route path="/about" element={<About />} />
      
        <Route path="/interior-design" element={<InteriorDesignPage />} />
  <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}