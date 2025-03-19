import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS user ID, service ID, and template ID
    const USER_ID = 'cwxD8tKJTNrJWQxbp';
    const SERVICE_ID = 'service_yoczsg4';
    const TEMPLATE_ID = 'template_c9927y8';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log('Email successfully sent!', response);
        alert('Thank you for your message! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p>We'd love to hear from you. Contact us for a free consultation.</p>
        </div>
        
        <div className="contact-grid grid grid-2">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Office Location</h4>
                <p>Area 47, Lilonger, Malawi</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>+265 99 53 75 405</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>+265 88 71 71 231</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>kadionsystems@gmail.mw</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://x.com/justGabriel265" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="hosting">Hosting & Domain</option>
                  <option value="support">IT Support</option>
                  <option value="package">Service Package</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;