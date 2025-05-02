// src/components/Updates.js
import React from "react";

export default function Updates() {
  return (
    <section id="updates" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="text-success fw-bold mb-4">Important Updates</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Scholarship Application Open</h5>
                <p className="card-text">Apply now for our 2025 academic year scholarship assistance programs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Civic Welfare Drive</h5>
                <p className="card-text">Join us for a city clean-up and sanitation awareness event this weekend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Digital Literacy Campaign</h5>
                <p className="card-text">Workshops on how to use government portals and social platforms effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
