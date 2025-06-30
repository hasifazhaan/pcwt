import React, { useEffect, useState } from "react";
import logo from '../../res/PCWT-removebg.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "departments", "updates", "joinus"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% visible to be considered "in view"
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "updates", label: "Updates", href: "/#updates" },
    { id: "departments", label: "Departments", href: "/#departments" },
    { id: "joinus", label: "Join Us", href: "/joinus" },
  ];

  const closeNavbar = () => {
    // Only collapse on mobile (Bootstrap breakpoint: lg < 992px)
    if (window.innerWidth < 992) {
      const navbar = document.getElementById("navbarNav");
      if (navbar && navbar.classList.contains("show")) {
        const bsCollapse = new window.bootstrap.Collapse(navbar, {
          toggle: false
        });
        bsCollapse.hide();
      }
    }
  };
  

  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${scrolled ? 'navbar-success bg-success shadow' : 'navbar-glass'}`}>
        <div className="container">
          <a className="navbar-brand" href="/#home">
            <img
              src={logo}
              alt="Logo"
              width={scrolled ? 40 : 80}
              height={scrolled ? 40 : 80}
              className="logo transition"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link ${activeSection === link.id ? "active fw-bold" : ""}`}
                    href={link.href} 
                    onClick={closeNavbar} 
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}



// // src/components/Navbar.js
// import React, { useEffect, useState } from "react";
// import logo from '../../res/PCWT-removebg.png';
// // import logoDark from  '../../res/PCWT-removebg.png'; // fallback logo on scroll

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header>
//       <nav className={`navbar navbar-expand-lg fixed-top navbar-dark  ${scrolled ? 'navbar-success bg-success shadow' : 'navbar-glass'}`}>
//         <div className="container">
//           <a className="navbar-brand" href="/#home">
//             <img
//               // src={scrolled ? logoDark : logoLight}
//               src = {logo}
//               alt="Logo"
//               width={scrolled ? 40 : 80}
//               height={scrolled ? 40 : 80}
//               className="logo transition"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/#about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/#departments">Departments</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/#updates">Updates</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/joinus">Join Us</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
