// src/components/Header.js
import React from "react";

export default function Header() {
  return (
    <header className="bg-light text-center py-5" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk=)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container text-white bg-dark bg-opacity-75 py-4 rounded">
        <h1 className="display-4 fw-bold">Pulekeshi Nagar Community Welfare Trust (PCWT)</h1>
        <p className="lead">Empowering the community through education, civic responsibility, and digital awareness.</p>
      </div>
    </header>
  );
}
