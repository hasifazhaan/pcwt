// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Updates from "./components/Updates";
import Departments from "./components/Departments";
import SuccessStories from "./components/SuccessStories";
import Contact from "./components/Contact";
import Gallery  from "./components/Gallery";
import Footer from "./components/Footer";
import './App.css';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Updates />
      <Gallery/>
      <Departments />
      <SuccessStories />
      <Contact/>
      <Footer />
    </>
  );
}
