// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Updates from "./components/Updates";
import Departments from "./components/Departments";
import Contact from "./components/Contact";
import Gallery  from "./components/Gallery";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Updates />
      <Gallery/>
      <Departments />
      <Contact/>
      <Footer />
    </>
  );
}
