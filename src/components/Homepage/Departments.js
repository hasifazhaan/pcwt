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
    ],
    link:"./EducationDept"
  },
  {
    title: "Social Media Department",
    items: [
      "Awareness through Social Media",
      "Campaigns",
      "How to Utilize Social Platforms",
      "How to Utilize Government Benefits"
    ],
    link:"./SocialDept"
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
    ],
    link:"./CivicDept"
  }
];

export default function Departments() {
  return (
    <section id="departments" className="py-5 " style={{ backgroundColor: "#e6ffea" }}>
      <div className="container text-center">
        <h2 className="text-success fw-bold mb-2">Our Fields Of Work </h2>
        <div className="section-underline" style={{ width: '300px'}}></div>
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
                  <a href={dept.link} rel="noopener noreferrer" 
                    className="text-success mt-auto">
                      Click to learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
