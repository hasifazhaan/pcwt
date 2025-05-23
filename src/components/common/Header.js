// src/components/Header.js
import React from "react";
import backimg from '../../res/img/img4.jpg'

export default function Header() {
  return (
    <header className="bg-light text-center py-5" style={{ backgroundImage: 'url('+backimg+')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container text-white bg-dark bg-opacity-75 py-4 rounded">
        <h1 className="display-4 fw-bold">Pulekeshi Nagar Community Welfare Trust (PCWT)</h1>
        <p className="lead">Power to the People, Care for the Community </p>
      </div>
    </header>
  );
}
