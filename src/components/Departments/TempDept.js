import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from "../common/Navbar"
import Footer from "../common/Footer";
import '../../App.css';
import backimg from '../../res/img/education-bg.jpg'
import programsJson from '../../res/pcwt_programs_data.json'
import department_program from '../../res/department_sections.json'
// import Image1 from '../../res/img/img2.jpg';



export default function TempDept({dept}) {
  const [programs, setPrograms] = useState([]);
  const [bgSection, setBgSection] = useState({
    heading: 'Education Department',
    subheading: 'PCWT aims to bridge the gap between communities and essential services by fostering awareness and participation at the local level.',
    background_image: backimg,
  });
  const fetchPrograms = async () => {  
    const allPrograms = Array.isArray(programsJson) ? programsJson : programsJson.programs;
    const filtered = allPrograms
    .filter(item => item.dept_id.toString() === dept.dept_id.toString())
    .sort((a, b) => parseInt(a.view_order) - parseInt(b.view_order)); // Sort by id ascending

    setPrograms(filtered);
    console.log(filtered)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const fetchBgSection = async () => {
    const section = department_program.department.filter(
      section => section.dept_id.toString() === dept.dept_id.toString()
    );
  
  
    setBgSection({
      heading: section[0].heading || 'Default Heading',
      subheading: section[0].subheading || 'Default Subheading',
      background_image: section[0].background_image || backimg
    });
  };
  


  useEffect(() => {
    fetchBgSection();
    fetchPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    return (
        <>
        <div style={{ backgroundImage: `url(${bgSection.background_image})`, backgroundSize: 'cover' }} >
        <Navbar/>

        <section id="departments" className="py-4 edu-dept-head">
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
            <h1 className='text-success text-center'>Our Key Programs and initiatives</h1>
            <p className='lead'>
                We Empower children, youth, and adults through inclusive learning,life skills training and healty life style.
            </p>
            <p>
            At PCWT, we believe that education is the foundation of personal and societal transformation.
            Our initiatives aim to bridge gaps in access, quality, and guidance—creating a space where 
            every learner, regardless of background, finds the support and opportunities they need to grow. We run 
            a range of programs tailored for different age groups and learning needs.
            </p>
            <br/>
        </section>
        <section>
            {programs.map((item, index) => (
            <div key={index} className = 'edu-block'>
                
                <h3 className={`fw-bold mb-3 ${item.textColor}`} >{item.title}</h3>
                <div className='lead'> <ReactMarkdown>{item.description}</ReactMarkdown></div>

                <div className="image-container me-md-4 mb-4 mb-md-0">
                {item.image ?  <img src={item.image} alt="Community Engagement" className ='img-fluid' height={'100%'} width={'100%'} /> : null}
 
                {/* {item.image ?  <img src={`https://drive.google.com/uc?export=view&id=1nLQ4FLGQ1u2ctYAVAxKSJlZvfZD-eumZ`} alt="Community Engagement" className ='img-fluid' /> : null} */}
              </div>
            </div>
               
            ))}
        </section>
        <Footer/>       
    </>
     
    );
  }
  
