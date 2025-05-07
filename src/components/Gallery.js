// src/components/Gallery.js
import React from "react";

const images = [
  "https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk=",
  "https://media.istockphoto.com/id/1166479876/photo/group-of-happy-gypsy-indian-children-desert-village-india.jpg?s=612x612&w=is&k=20&c=x80foAmr9XlOjxIbXVWz0sveCIyYw3JR07jGtM2JVAQ=",
  "https://static.vecteezy.com/system/resources/thumbnails/054/359/384/small/thoughtful-young-boy-with-dark-skin-and-serious-expression-free-photo.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/050/357/844/small_2x/a-group-of-children-playing-together-one-child-standing-on-the-outskirts-with-a-look-of-longing-and-isolation-on-their-face-photo.jpg",
  "https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk=",
  "https://media.istockphoto.com/id/1166479876/photo/group-of-happy-gypsy-indian-children-desert-village-india.jpg?s=612x612&w=is&k=20&c=x80foAmr9XlOjxIbXVWz0sveCIyYw3JR07jGtM2JVAQ=",
  "https://static.vecteezy.com/system/resources/thumbnails/054/359/384/small/thoughtful-young-boy-with-dark-skin-and-serious-expression-free-photo.jpg"
];

export default function Gallery() {
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
