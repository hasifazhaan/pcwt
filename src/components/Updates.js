// src/components/UpdatesSection.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const updates = [
  {
    title: "Scholarship Program Launched",
    description: "Applications open for PCWT's scholarship initiative supporting underprivileged students."
  },
  {
    title: "Sanitation Drive",
    description: "Join our weekly cleanliness campaign across local neighborhoods."
  },
  {
    title: "Free Health Camp",
    description: "A free health check-up camp organized in collaboration with local hospitals."
  },
  {
    title: "Digital Literacy Workshop",
    description: "Empowering youth with basic computer and internet skills."
  },
  {
    title: "New Crash Course Batch",
    description: "Enroll now for intensive summer crash courses for SSLC students."
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Updates() {
  return (
    <section className="container-fluid py-5" id="updates" style={{ backgroundColor: "#e6ffea" }}>
      <h2 className="text-center mb-2 text-success fw-bold">Latest Updates</h2>
      <div className="section-underline" style={{ width: '200px'}}></div>
      <Carousel 
        responsive={responsive} 
        infinite autoPlay={true} 
        autoPlaySpeed={7000}
        keyBoardControl className="py-4">
        {updates.map((update, index) => (
          <div key={index} className="card mx-2 shadow-sm border-0" style={{ backgroundColor: "#f4fbf7" }}>
            <div className="card-body">
              <h5 className="card-title text-success">{update.title}</h5>
              <p className="card-text text-muted">{update.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
