import React from "react";
import {
  // FaFacebookF,
  FaInstagram,
  // FaLinkedinIn,
  // FaXTwitter,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope, FaPhone
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-success text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Address */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Al Quba Masjid, Shampur main road, Coffee board Colony Pulekeshi Nagar, Bengaluru - 5600045</p>
            <p><FaPhone className="me-2" /> +91-7337709927</p>
            <p><FaEnvelope className="me-2" /> Pulkeshinagarcitizenswelfaretrust@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebookF />
              </a> */}
              <a href="https://www.instagram.com/pcwt_official?igsh=MWQweTRhZGlpNHc4YQ==" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaXTwitter />
              </a>
              */}
              <a href="https://whatsapp.com/channel/0029Vakku7c9sBIB1vL8nC1j" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaWhatsapp />
              </a> 
               <a href="https://www.youtube.com/@PULKESHINAGARCITIZENSWELFARETR" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaYoutube />
              </a> 
              
              
              
            </div>
          </div>

          {/* Quick Links or Branding */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">PCWT</h5>
            <p>Empowering the community through education, civic services, and digital awareness.</p>
          </div>
        </div>

        <div className="text-center pt-4 border-top border-white mt-4">
          <small>&copy; 2025 PCWT. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
