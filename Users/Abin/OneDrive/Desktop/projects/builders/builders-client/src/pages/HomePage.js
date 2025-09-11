import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";  // 👈 import Navbar

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Navbar */}
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>THE BUILDER</h1>
          <p>ARCHITECTS | INTERIOR | CONSTRUCTION & CONTRACTING</p>
          <button
            className="cta-button"
            onClick={() => navigate("/projects")}
          >
            Explore Our Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Images */}
          <div className="about-images">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
              alt="Villa exterior" 
              className="about-img img1"
            />
            <img 
              src="https://images.unsplash.com/photo-1599420186946-7b1f5a4e0e4b?auto=format&fit=crop&w=600&q=80" 
              alt="Top view project" 
              className="about-img img2"
            />
          </div>

          {/* Text */}
          <div className="about-text">
            <h5>ABOUT US</h5>
            <h2>Professional Construction & Interior Designing Company</h2>
            <p>
              CONSTRUCTIONS committed to your comfort from start to finish.
              From the time you walk through our doors, our family takes care
              of your family. That is our Philosophy.
            </p>
            <p>
              We are committed to building high-quality, functional, sustainable,
              and value-for-money homes backed by superior architecture,
              technology, and prompt delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="services-section">
  <div className="services-container">
    {/* Text */}
    <div className="services-text">
      <h5>OUR SERVICES</h5>
      <h2>We Focus On Modern Architecture And Interior Design</h2>
      <p>
        Quality construction, interior design, and architecture services
        tailored to your needs.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-home"></i></div>
          <h4>Construction</h4>
          <p>High-quality construction with attention to detail.</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-paint-roller"></i></div>
          <h4>Interior Design</h4>
          <p>Transform spaces into beautiful environments.</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-pencil-alt"></i></div>
          <h4>Architecture</h4>
          <p>Innovative architectural designs with aesthetics and functionality.</p>
        </div>
      </div>
    </div>

    {/* Images */}
    <div className="services-images">
      <img
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
        alt="Services image 1"
        className="service-img img1"
      />
      <img
        src="https://images.unsplash.com/photo-1560448072-7fa00a8d07b8?auto=format&fit=crop&w=600&q=80"
        alt="Services image 2"
        className="service-img img2"
      />
    </div>
  </div>
</section>


     {/* Contact Section */}{/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="contact-container">
    {/* Images */}
    <div className="contact-images">
      <img
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
        alt="Contact image 1"
        className="contact-img img1"
      />
      <img
        src="https://images.unsplash.com/photo-1590608897129-79ab22facc71?auto=format&fit=crop&w=600&q=80"
        alt="Contact image 2"
        className="contact-img img2"
      />
    </div>

    {/* Text */}
    <div className="contact-text">
      <h2>CONTACT US</h2>
      <p>
        Reach out to us for consultations, project inquiries, or any questions 
        about our construction and design services.
      </p>
      <div className="contact-info">
        <p><i className="fas fa-phone"></i> +91 00000000</p>
        <p><i className="fas fa-envelope"></i> info@builder.com</p>
        
      </div>

      <div className="contact-buttons">
        <button 
          className="whatsapp-btn"
          onClick={() => window.open("https://wa.me/7012599817", "hi i would to have an enquery")}
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </button>

        <button 
          className="call-btn"
          onClick={() => window.open("tel:+9100000000")}
        >
          <i className="fas fa-phone"></i> Call Now
        </button>
        {/* Location Button */}
  <button
    className="location-btn"
    onClick={() =>
      window.open("https://maps.app.goo.gl/ok4yFCoJVBcfsZir7")
    }
  >
    <i className="fas fa-map-marker-alt"></i> View Location
  </button>
      </div>
    </div>
  </div>

 
</section>



      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>cr</h3>
              <p>The Builder</p>
              <p>Professional Construction & Interior Designing Company</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a onClick={(e) => { e.preventDefault(); navigate("/projects"); }}>Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Construction</li>
                <li>Interior Design</li>
                <li>Architecture</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 The Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
