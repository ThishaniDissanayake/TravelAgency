import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-logo.png" alt="Travel Website Logo" />
      </div>
      <nav className="nav-links">
        <a href="/">HOME</a>
        <a href="/destination">DESTINATION</a>
        <a href="/about-us">ABOUT US</a>
        <a href="/blogs">BLOGS</a>
        <a href="/contact-us">CONTACT US</a>
      </nav>
      <div className="header-buttons">
        <button className="schedule-btn">SCHEDULE YOUR TRIP</button>
        <button className="login-btn">BOOK ONLINE / AGENT LOGIN</button>
      </div>
    </header>
  );
};

export default Header;

