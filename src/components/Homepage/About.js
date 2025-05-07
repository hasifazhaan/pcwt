// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="text-success fw-bold mb-2">What do we do</h2>
        <div className="section-underline" style={{ width: '200px'}}></div>
        <p className="lead">
        Established in 2024, the Pulakeshi Nagar Community Welfare Trust (PCWT) is a grassroots, 
        community-led initiative committed to empowering local residents. Our mission focuses on promoting 
        inclusive development through education, digital literacy, civic engagement, and access to welfare schemes.

        <br/>
        <br/>
        PCWT aims to bridge the gap between communities and essential services by fostering awareness and 
        participation at the local level. By working closely with residents, we strive to build a more informed,
         self-reliant, and connected society in Pulakeshi Nagar and beyond.
        </p>
      </div>
    </section>
  );
}
