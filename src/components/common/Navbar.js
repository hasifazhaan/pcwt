// src/components/Navbar.js
import React from "react";
import logo1 from '../../res/PCWT-removebg.png'

export default function Navbar({Logo}) {
 
  return (
    <header>
      {/* Top info bar */}
      {/* <div className="bg-success text-white py-1 small overflow-hidden hide-on-mobile">
        <div className="container d-flex justify-content-between align-items-center">
          <span >Pulikeshinagarcitizenswelfaretrust@gmail.com</span>
          <span >Phone No: +91 7337709927</span>
        </div>
      </div> */}

      {/* Sticky main navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="/#home">
            <img src={Logo?.image_url || logo1 } alt="" width={80} height={80} className="logo"/>
          
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
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#departments">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#updates">Updates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/joinus">Join Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}