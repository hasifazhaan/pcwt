// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5 " style={{ backgroundColor: "#e6ffea" }}>
      <div className="container">
        <h2 className="text-success fw-bold text-center mb-2">Contact Us</h2>
        <div className="section-underline" style={{ width: '150px'}}></div>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-5">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
