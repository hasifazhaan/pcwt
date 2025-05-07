// src/components/About.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <>
        <Navbar/>
        <section id="about" className="py-5 bg-white text-center">
            <div className="container">
                <h2 className="text-success fw-bold mb-2"> Oh uh!</h2>
                
                <p className="lead">
                This page does not exist  

                </p>
            </div>
        </section>
        <Footer/>
    </>
    
  );
}
