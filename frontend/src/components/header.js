// src/components/header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header class="header">
      <div class="container header-container">
        <div class="logo-container">
          <div class="logo">JJ</div>
        </div>
        <nav class="nav">
          <ul class="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
