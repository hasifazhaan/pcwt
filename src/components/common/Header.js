// src/components/Header.js
import React from "react";
import '../../index.css';


export default function Header({Name,sub}) {
  return (
  //   <header className="text-center py-5" >
  //   <div className="container text-white py-4 rounded shaded">
  //     <br/>
  //     <br/>
  //     {/* <h1 className="display-4 fw-bold">{Name}</h1>
  //     <p className="lead">{sub}</p> */}
  //     <h1 className="display-4 fw-bold">Pulekeshi Nagar Community Welfare Trust (PCWT)</h1>
  //     <p className="lead">Power to the People, Care for the Community </p>
  //   </div>

  //   <div className="ScrollDown">Scroll Down ↓</div>
  // </header>

        <header id="" className=" text-center py-5 main-header shaded ">
          <div className="container">
            <h1 className="display-4 text-white fw-bold mb-5"> 
                Pulekeshi Nagar Community Welfare Trust (PCWT)
             
            </h1>  
            <p className="lead text-white">
                  Power to the People, Care for the Community 
            </p>
          </div>
        </header>
  );
}
