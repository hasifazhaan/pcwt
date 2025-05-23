// src/components/Gallery.js
import React from "react";
import Img1 from '../../res/img/img1.jpg'
import Img2 from '../../res/img/img2.jpg'
import Img3 from '../../res/img/img3.jpg'
import Img4 from '../../res/img/img4.jpg'
import Img5 from '../../res/img/img5.jpg'
import Img6 from '../../res/img/img6.jpg'
import Img7 from '../../res/img/img7.jpg'
import Img8 from '../../res/img/img8.jpg'
import Img9 from '../../res/img/img9.jpg'


const images = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9];

const Gallery = () => {
  return (
    <section id="gallery" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="text-success fw-bold mb-2">Gallery</h2>
        <div className="section-underline" style={{ width: '100px'}}></div>
        <div className="row">
          {images.map((src, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <img src={src}  height='100px' width= '500px' className="img-fluid rounded shadow-sm" alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Gallery;
export {images};