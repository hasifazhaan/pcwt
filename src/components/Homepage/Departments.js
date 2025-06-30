// src/components/Departments.js
import React from "react";
import { Link } from "react-router-dom";
import "../../card.css"
import { GiSpellBook } from "react-icons/gi";
import { FaPeopleLine } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { IoFitnessSharp } from "react-icons/io5";

const departments = [
  {
    heading: "Education Department",
    department_name:"education",
    logo:<GiSpellBook style={{ fontSize: "100px" }}/>,
    items: [
      "Scholarship",
      "Crash Course: Maths, English, Kannada, Hindi, Social, Science, Computer Science",
      "Teaching Products",
      "Empowerment Education",
      "Counselling & Guidance"
    ],
    link:"/dept/education"
  },
  {
    heading: "Social Media Awareness",
    department_name:"social",
    logo:<FaPeopleLine style={{ fontSize: "100px" }} />,
    items: [
      "Awareness through Social Media",
      "Campaigns",
      "How to Utilize Social Platforms",
      "How to Utilize Government Benefits"
    ],
    link:"/dept/social"
  },
  {
    heading: "Civic Engagement",
    department_name:"civic",
    logo:<FaHandsHelping style={{ fontSize: "100px" }} />,
    items: [
      "Sanitation",
      "BESCOM",
      "BWSSB",
      "Garbage Management",
      "Public Welfare Service",
      "Health Service Care",
      "Social Justice & Empowerment"
    ],
    link:"/dept/civic"
  },
  {
    heading: "Health & Fitness",
    department_name:"health",
    logo:<IoFitnessSharp  style={{ fontSize: "100px" }} />,
    items:'Public Health,Medical camps,Fitness,Yoga",Sanitation',
    link:"/dept/health"
  }
  
];

export default function Departments() {
  return (
    // e6ffea
    <section id="departments" className="py-5 " style={{ backgroundColor: "#e6ffea" }}>
      <div className="container text-center">
        <h2 className="text-success fw-bold mb-2">Our Fields Of Work </h2>
        <div className="section-underline" style={{ width: '300px'}}></div>
        <div className="row">
          {departments.map((dept, index) => (
            <div key={index} className="col-md-4 mb-4  " data-aos= {`${index % 2?'fade-up':'fade-up'}`} data-aos-duration="10000">
              <Link to={`/dept/${dept.department_name}`} rel="noopener noreferrer" className="cardm" style={{textDecoration:"none"}}>
              
              
              <div className="card e-card playing" >
                
                <div className="card-body">
                <div className="image" />
                <div className="wave" style={{animationDelay:`${Math.floor(Math.random() * (35 - 100 ) + 35)}ms`}}/>
                <div className="wave" style={{animationDelay:`${Math.floor(Math.random() * (35 - 100 ) + 35)}ms`}}/>
                <div className="wave" style={{animationDelay:`${Math.floor(Math.random() * (35 - 100 ) + 35)}ms`}}/>
                <div className="infotop">
                {/* <GiSpellBook style={{ fontSize: "100px" }}/> */}
                {dept.logo}
                <br/>
                  <h5 className="card-title text-white fw-bold text-capitalize">{dept.heading}</h5>
                  <br/>
                  <div className="name">
                      Click to learn more
                  </div>
                </div>
              </div>
            </div>
            </Link>
              
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
