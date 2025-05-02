// src/components/Departments.js
import React from "react";

const departments = [
  {
    title: "Education Department",
    items: [
      "Scholarship",
      "Crash Course: Maths, English, Kannada, Hindi, Social, Science, Computer Science",
      "Teaching Products",
      "Empowerment Education",
      "Counselling & Guidance"
    ]
  },
  {
    title: "Social Media Department",
    items: [
      "Awareness through Social Media",
      "Campaigns",
      "How to Utilize Social Platforms",
      "How to Utilize Government Benefits"
    ]
  },
  {
    title: "Civic Department",
    items: [
      "Sanitation",
      "BESCOM",
      "BWSSB",
      "Garbage Management",
      "Public Welfare Service",
      "Health Service Care",
      "Social Justice & Empowerment"
    ]
  }
];

export default function Departments() {
  return (
    <section id="departments" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="text-success fw-bold mb-4">Our Departments</h2>
        <div className="row">
          {departments.map((dept, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 border-success">
                <div className="card-body">
                  <h5 className="card-title text-success fw-bold">{dept.title}</h5>
                  <ul className="list-unstyled text-start">
                    {dept.items.map((item, idx) => (
                      <li key={idx} className="mb-1">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
