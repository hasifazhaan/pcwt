import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../common/Navbar"
import Footer from "../common/Footer";
import '../../App.css';
import backimg from '../../res/img/education-bg.jpg'
// import Image1 from '../../res/img/img2.jpg';



export default function EducationDept() {
  const [programs, setPrograms] = useState([]);
  const [bgSection, setBgSection] = useState({
    heading: 'Education Department',
    subheading: 'PCWT aims to bridge the gap between communities and essential services by fostering awareness and participation at the local level.',
    background_image: backimg,
  });
  // const [form, setForm] = useState({ title: '', description: '',image:Image1 });

  // Fetch existing programs
  useEffect(() => {
    fetchPrograms();
    fetchBgSection(); 
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get('http://localhost:3001/education-programs/public');
      setPrograms(res.data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Error fetching programs:', err);
      alert("no server")
    }    
  }

  const fetchBgSection = async () => {
    try {
      const res = await axios.get('http://localhost:3001/department-section/education');
      const data = res.data;
      setBgSection({
        heading: data.heading || bgSection.heading,
        subheading: data.subheading || bgSection.subheading,
        background_image: data.background_image || backimg
      });
    } catch (err) {
      console.error('Error fetching background section:', err);
    }
  };

  

    return (
        <>
        <div style={{ backgroundImage: `url(${bgSection.background_image})`, backgroundSize: 'cover' }} >
        <Navbar/>

        <section id="" className="py-4 edu-dept-head">
            <div className="container">
                <h1 className="text-success fw-bold mb-5 text-center edu-txt"> 
                  {/* Education Department */}
                  {bgSection.heading}
                </h1>  
                <p className="lead text-white">
                    {/* PCWT aims to bridge the gap between communities and essential services by fostering awareness and 
                    participation at the local level.  */}
                    {bgSection.subheading}
                    
                </p>
            </div>
        </section>
        </div>
        {/* "#e6ffea" */}

        <section id="" className="py-4 container-fluid" style={{ backgroundColor: "#e6ffea" }} >
            <h1 className='text-success text-center'>Our Key Education Programs</h1>
            <p className='lead'>
                We Empower children, youth, and adults through inclusive learning, scholarships, crash courses, and life skills training.
            </p>
            <p>
            At PCWT, we believe that education is the foundation of personal and societal transformation.
            Our education initiatives aim to bridge gaps in access, quality, and guidance—creating a space where 
            every learner, regardless of background, finds the support and opportunities they need to grow. We run 
            a range of programs tailored for different age groups and learning needs.
            </p>
            <br/>
        </section>
        <section>
            {programs.map((item, index) => (
            <div key={index} className = 'edu-block'>
                <h3 className={`fw-bold mb-3 ${item.textColor}`} >{item.title}</h3>
                <p className='lead'>{item.description}</p>

                <div className="image-container me-md-4 mb-4 mb-md-0">
                {item.image ?  <img src={item.image} alt="Community Engagement" className ='img-fluid' /> : null}
 
                {/* {item.image ?  <img src={`https://drive.google.com/uc?export=view&id=1nLQ4FLGQ1u2ctYAVAxKSJlZvfZD-eumZ`} alt="Community Engagement" className ='img-fluid' /> : null} */}
              </div>
            </div>
               
            ))}
        </section>
        <Footer/>       
    </>
     
    );
  }
  
