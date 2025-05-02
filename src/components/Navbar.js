// src/components/Navbar.js
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home" id='home'>
          PCWT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#about">About</a>
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
  );
}
