import React from 'react';
import Image1 from '../../res/img/img2.jpg'; // replace with your image path
import Image2 from '../../res/img/img6.jpg';
 


export default function About() {

  return (
    <>
    <section id="about" className="py-5 bg-white text-center" data-aos="fade-right">
      <div className="container">
        <h2 className="text-success fw-bold mb-2">About</h2>
        <div className="section-underline" style={{ width: '200px'}}></div>
        <p className="lead">
        Pulekeshi Nagar Community Welfare Trust (PCWT), 
        founded by Moulana Asif Hazrath and Moulana Salahuddin Hazrath, 
        is a grassroots initiative born from the passion of local citizens determined to uplift and 
        empower their neighborhood. 
        <br/>
        What began as a small group of dedicated volunteers has grown into a 
        structured and impactful trust working across education, civic engagement, health, and digital awareness to 
        bring meaningful change to the community.
        </p>
      </div>
      </section>
    
    <div className="container-fluid py-5 bg-light">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="container">
        <h2 className="text-success fw-bold mb-2">Our Mission</h2>
        <div className="" style={{ width: '200px'}}></div>
        <p className="lead">
        To uplift local communities through education, civic participation, 
        and empowerment programs that foster long-term growth and unity.
        </p>
      </div>
        <div className="image-container me-md-4 mb-4 mb-md-0">
          <img
            src={Image1}
            alt="Community Engagement"
            className ='img-fluid'
            data-aos="flip-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>

    <div className="container-fluid py-5 bg-light">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="image-container me-md-4 mb-4 mb-md-0">
          <img
            src={Image2}
            alt="Community Engagement"
            className= 'img-fluid'
            data-aos="flip-down"
            data-aos-duration="2000"
          />
        </div>
      <div className="container">
        <h2 className="text-success fw-bold ">Vision</h2>
        <div className="" style={{ width: '200px'}}></div>
        <p className="lead">
        We envision a community where every individual is educated, aware of their rights, and actively engaged in improving their lives and 
        surroundings—building a stronger, united, and self-sustaining society for generations to come.
        </p>
      </div>

      </div>
    </div>

    

    </>
  );
}  
