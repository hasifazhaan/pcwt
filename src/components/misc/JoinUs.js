import React from "react";
import Navbar from "../common/Navbar"
import Footer from "../common/Footer";
import '../../App.css';
import {images} from '../Homepage/Gallery'

export default function EducationDept() {
    return (
        <>
        <Navbar/>
        <div className="bg-light py-5 px-3" id="join-us">
      <div className="text-center mb-5">
        <h2 className="text-success fw-bold">Join Us Today</h2>
        <div className="border-bottom border-success mx-auto" style={{ width: "80px" }}></div>
        <p className="text-muted mt-2">Be a part of the Dreams for Life family and help build brighter futures.</p>
      </div>

      <div className="container mb-5">
        <div className="mb-4 text-center">
          <img
            src={images[1]}
            alt="Join Dreams for Life"
            className="img-fluid rounded shadow join-img "

          />
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="text-success mb-3">Rules to follow</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Eligibility:</strong> 18+ for volunteers, interns must be enrolled or recent grads.
            </li>
            <li className="list-group-item">
              <strong>Responsibilities:</strong> Follow DLWF’s mission, treat others respectfully, and maintain confidentiality.
            </li>
            <li className="list-group-item">
              <strong>Time Commitment:</strong> Follow minimum duration set by DLWF.
            </li>
            <li className="list-group-item">
              <strong>Compensation:</strong> Volunteer/intern roles are unpaid; academic credit possible.
            </li>
            <li className="list-group-item">
              <strong>Termination:</strong> Either party may terminate with proper notice.
            </li>
            <li className="list-group-item">
              <strong>Liability:</strong> Participation is voluntary and at your own risk.
            </li>
            <li className="list-group-item">
              <strong>Code of Conduct:</strong> Zero tolerance for unethical behavior.
            </li>
            <li className="list-group-item">
              <strong>Agreement:</strong> You agree to follow DLWF rules and understand the terms.
            </li>
          </ul>

          
        </div>
      </div>
</div>
    
       <Footer/>
    </>
     
    );
  }
  
