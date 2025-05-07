import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-success text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Address */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Pulekeshi Nagar, Bengaluru - 560005</p>
            <p><FaPhone className="me-2" /> +91-9876543210</p>
            <p><FaEnvelope className="me-2" /> info@pcwt.org</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaXTwitter />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaWhatsapp />
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
