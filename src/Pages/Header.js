
import React, { useState, useEffect, useRef } from "react";
import logo from "../Picture/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Ref to detect outside click for mobile dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isMobile
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <nav
      style={{
        background: "#e6e7f5ff",
        padding: "10px 20px",
        borderBottom: "3px solid #1d0202ff",
        position: "sticky",
        top: "0",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              marginRight: "20px",
              height: "4rem",
              width: "4rem",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Link>

        {/* Hamburger menu toggle */}
        <div
          onClick={toggleMenu}
          style={{ cursor: "pointer", display: isMobile ? "block" : "none" }}
        >
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Links container */}
        <div
          style={{
            display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "20px" : "60px",
            position: isMobile ? "absolute" : "static",
            top: isMobile && menuOpen ? "70px" : "auto",
            left: 0,
            right: 0,
            background: isMobile ? "#fff" : "transparent",
            padding: isMobile ? "20px" : "0",
            boxShadow: isMobile ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
            zIndex: 100,
          }}
        >
          <NavLink to="/" onClick={closeMenu} style={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} style={linkStyle}>
            About Me
          </NavLink>

          {/* Dropdown Services */}
          <div
            ref={dropdownRef}
            style={{
              position: "relative",
              display: "inline-block",
              width: isMobile ? "100%" : "auto",
            }}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <div
              style={{ ...linkStyle, cursor: "pointer" }}
              onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
            >
              Services <FaChevronDown style={{ marginLeft: "5px" }} />
            </div>

            {dropdownOpen && (
              <div
                style={{
                  position: isMobile ? "static" : "absolute",
                  top: isMobile ? "auto" : "100%",
                  left: 0,
                  backgroundColor: "#fff",
                  boxShadow: isMobile
                    ? "none"
                    : "0px 4px 8px rgba(0,0,0,0.1)",
                  minWidth: "180px",
                  marginTop: isMobile ? "10px" : "5px",
                  zIndex: 1000,
                }}
              >
                <NavLink to="/service/Land" onClick={closeMenu} style={dropdownLink}>
                  Land Title
                </NavLink>
                <NavLink to="/service/Loans" onClick={closeMenu} style={dropdownLink}>
                  Loan Issuance
                </NavLink>
                <NavLink to="/service/Logbook" onClick={closeMenu} style={dropdownLink}>
                  Log Book
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeMenu} style={linkStyle}>
            Contact
          </NavLink>

          <Link to="/gallery" onClick={closeMenu}>
            <button
              style={{
                backgroundColor: "#ff5722",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Gallery
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Styles
const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  width: "100%",
  display: "block",
};

const dropdownLink = {
  display: "block",
  padding: "10px 15px",
  textDecoration: "none",
  color: "#333",
  width: "100%",
};
