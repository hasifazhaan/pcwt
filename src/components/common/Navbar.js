// src/components/Navbar.js
import React from "react";
import logo from '../../res/PCWT.jpg'

export default function Navbar() {
  return (
    <header>
      {/* Top info bar */}
      <div className="bg-success text-white py-1 small">
        <div className="container d-flex justify-content-between align-items-center">
          <span>Email: pcwt@example.org</span>
          <span>Phone: +91 98765 43210</span>
        </div>
      </div>

      {/* Sticky main navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="#home">
            <img src={logo} alt="" width={50} height={50} className="logo"/>
          
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#departments">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#updates">Updates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}