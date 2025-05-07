// src/App.js
import React from "react";
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

import '../../App.css';


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
      <Commitment/>
      <Contact/>
      <Footer />
    </>
  );
}
