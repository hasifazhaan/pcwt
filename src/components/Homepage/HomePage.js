// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get('http://localhost:3001/homepage-sections/public');
        setSections(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Error loading homepage sections:", err);
      }
    };
    fetchSections();
  }, []);

  const getSection = (key) => sections.find(s => s.section_key === key && s.visible === 'y');

  const logo = getSection('logo');
  const hero = getSection('hero');
  const about = getSection('about');
  const mission = getSection('mission');
  const vision = getSection('vision');
  const commitment  = getSection('what_we_do');
  const name = 'Pulekeshi Nagar Community Welfare Trust (PCWT)'
  const sub ='Power to the People, Care for the Community'
  console.log(logo)

  return (
    <>
      <div className="header1" style={{ backgroundImage: 'url('+(hero?.image_url || backimg) +')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar Logo = {logo}/>
        <Header Name={hero?.title || name} sub={hero?.subtitle || sub} />
      </div>
      <About about={about} mission={mission} vision={vision} />
      <Updates />
      <Gallery/>
      <Commitment commitment={commitment}/>
      <Departments />
      <SuccessStories />
      <Contact/>
      <Footer />
    </>
  );
}
