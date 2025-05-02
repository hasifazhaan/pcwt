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

export default function HomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" id ="home">
            PCWT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#departments">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#updates">Updates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-light text-center py-5" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk=)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-white bg-dark bg-opacity-75 py-4 rounded">
          <h1 className="display-4 fw-bold">Pulekeshi Nagar Community Welfare Trust (PCWT)</h1>
          <p className="lead">Empowering the community through education, civic responsibility, and digital awareness.</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="text-success fw-bold mb-4">About Us</h2>
          <p className="lead">
            PCWT is a community-led initiative to support local residents with access to education, digital literacy, civic engagement, and welfare schemes. Our mission is to bring inclusive development and awareness at the grassroots level.
          </p>
        </div>
      </section>

      {/* Important Updates Section */}
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

      {/* Departments Section */}
      <section id="departments" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="text-success fw-bold mb-5">Our Departments</h2>
          <div className="row">
            {departments.map((dept, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 border-success shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-success">{dept.title}</h5>
                    <ul className="list-group list-group-flush mt-3">
                      {dept.items.map((item, idx) => (
                        <li key={idx} className="list-group-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} PCWT - Pulekeshi Nagar Community Welfare Trust. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
