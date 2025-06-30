// src/App.js
import React from 'react';
import Navbar from "../common/Navbar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import About from "./About";
import Updates from "./Updates";
import Departments from "./Departments";
import SuccessStories from "./SuccessStories";
import Contact from "./Contact";
import Gallery  from "./Gallery";
import Commitment from "./Commitment";
import backimg from '../../res/img/img4.jpg'

import '../../App.css';


export default function HomePage() {
  return (
    <>
      <div id="home" className="header1" style={{ backgroundImage: 'url('+(backimg) +')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar/>
        <Header />
      </div>
      <About />
      <Updates />
      <Gallery/>
      <Commitment/>
      <Departments />
      <SuccessStories />
      <Contact/>
      <Footer />
    </>
  );
}
