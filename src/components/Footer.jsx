import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid grid grid-4">
          <div className="footer-column">
            <Link to="/" className="logo">
              <span className="logo-text">Tech<span className="highlight">Solutions</span></span>
            </Link>
            <p className="company-description">
              Professional IT support and programming services for businesses in Malawi and beyond.
            </p>
            <div className="social-links">
              
              <a href="https://x.com/justGabriel265" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:kadionsystems@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Mobile App Development</Link></li>
              <li><Link to="/services">Hosting & Domain Services</Link></li>
              <li><Link to="/services">IT Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/">Careers</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <address className="contact-info">
              <p>Phone: +265 99 53 75 405</p>
              <p>Email: kadionsystems@gmail.mw</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KadionSystems. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
