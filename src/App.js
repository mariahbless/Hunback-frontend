import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service/Loans" element={<LoanIssuancePage />} />
        <Route path="/service/Land" element={<LandTitlePage />} />
        <Route path="/service/logbook" element={<LogBook />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
