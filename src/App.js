import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import { Footer } from './Pages/Footer';
import { NavBar } from './Pages/Header';

// Import your pages
import HomePage from './Pages/Homepage';
import ContactPage from './Pages/Contact';
import AboutPage from './Pages/About';
import LoanIssuancePage from './Pages/Loans';
import LandTitlePage from './Pages/Lands';
import { Gallery } from './Pages/Gallery';
import { LogBook } from './Pages/Log';


function App() {
  return (
    <Router>
      {/* NavBar will appear on all pages */}
      <NavBar />

      {/* Page content */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="service/Loans" element={<LoanIssuancePage />} />
        <Route path="/service/Land" element={<LandTitlePage />} />
        <Route path="/service/logbook" element={<LogBook />} />
        <Route path="/gallery" element={<Gallery />} />

  
      
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
