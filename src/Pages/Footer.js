import React from 'react';
import FACEBOOK from '../Picture/facebook.png';
import linkedin from '../Picture/linkedin.png';
import x from '../Picture/x.png';
import './Home.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

export function Footer() {
  return (
    <div className='footer'>
      {/* Social Media Section */}
      <div className="footer_left">
        <h4>Connect with us</h4>
        <div className="social-link">
          <a href="https://linkedin.com/barnet_namara" target="blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='icons' />
          </a>
          <span>LinkedIn</span>
        </div>
        <div className="social-link">
          <a href="https://twitter.com/barnet_namara" target="blank" rel="noopener noreferrer">
            <img src={x} alt="X" className='icons' />
          </a>
          <span>X</span>
        </div>
        <div className="social-link">
          <a href="https://facebook.com/barnet_Namara" target="blank" rel="noopener noreferrer">
            <img src={FACEBOOK} alt="Facebook" className='icons' />
          </a>
          <span>Facebook</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="footer-section about"></div>

      {/* Quick Links */}
      <div className="footer-section links">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/About/about">About Us</a>
        <a href="/programs">Programs</a>
        <a href="/Contact/contact">Contact</a>
      </div>

      {/* Contact Section (Static) */}
      <div className="footer-section contact">
        <h4>Contact Us</h4>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaEnvelope />
          </span>
          olarakenneth2020@gmail.com
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaPhone />
          </span>
          0772341475 (MTN)
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <GiSmartphone />
          </span>
          0701234567 (Airtel)
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaMapMarkerAlt />
          </span>
          Kampala, Uganda
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 DIFA Uganda. All Rights Reserved.</p>
      </div>
    </div>
  );
}
