import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>B</h2>
          <span>The Builder</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <HashLink
              smooth
              to="/#home"
              className={activeSection === "home" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveSection("home")}
            >
              Home
            </HashLink>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={activeSection === "projects" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <HashLink
              smooth
              to="/#about"
              className={activeSection === "about" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveSection("about")}
            >
              About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              smooth
              to="/#contact"
              className={activeSection === "contact" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
