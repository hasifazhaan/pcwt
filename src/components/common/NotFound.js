// src/components/About.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import notfnd  from '../../res/img/notfound.jpg'


export default function NotFound() {
  return (
    <>  
        <div className="py-5 bg-success">
        <Navbar/>
        </div>
        
        <section id="" className="py-5 bg-white text-center">
          <div>
            <div>
            <h1>Oops</h1>  
              <p>The Page you're looking for isn't here.</p>
            </div>
            <img src={notfnd} alt="not found" height={"30%"} width={"30%"}/>
          </div>
        </section>
        <Footer/>
    </>
    
  );
}
