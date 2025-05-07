import React from "react";
import Navbar from "../common/Navbar"
import Footer from "../common/Footer";
import '../../App.css';


export default function EducationDept() {
    return (
        <>
        <Navbar/>
        <section id="" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-success fw-bold mb-4"> Education Department</h2>
                
                <p className="lead">
                CWT aims to bridge the gap between communities and essential services by fostering awareness and 
        participation at the local level. By working closely with residents, we strive to build a more informed,
         self-reliant, and connected society in Pulakeshi Nagar and beyond.

                </p>
            </div>
        </section>
        <Footer/>
    </>
     
    );
  }
  
