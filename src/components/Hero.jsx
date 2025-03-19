import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

// Import images
import websiteImg from '../assets/images/website.jpg';
import mobileImg from '../assets/images/mobile.jpg';
import itSupportImg from '../assets/images/it_support.jpg';
import serverImg from '../assets/images/server.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: websiteImg,
      title: "Website Development",
      subtitle: "Custom websites tailored to your business needs"
    },
    {
      image: mobileImg,
      title: "Mobile App Development",
      subtitle: "Innovative mobile solutions for your customers"
    },
    {
      image: itSupportImg,
      title: "IT Support Services",
      subtitle: "24/7 technical support for your business"
    },
    {
      image: serverImg,
      title: "Server Management",
      subtitle: "Reliable server solutions and maintenance"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="hero-carousel">
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/services" className="btn btn-primary">Our Services</Link>
                  <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          &gt;
        </button>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>
      
      <section className="discount-banner">
        <div className="container">
          <div className="discount-list">
            <div className="discount-item">
              <span className="discount-percent">10% OFF</span>
              <span className="discount-text">For Educational Institutions</span>
            </div>
            <div className="discount-item">
              <span className="discount-percent">10% OFF</span>
              <span className="discount-text">Referals (Both existing and new Client)</span>
            </div>
            <div className="discount-item">
              <span className="discount-percent">10% OFF</span>
              <span className="discount-text">First-time Clients</span>
            </div>
            <div className="discount-item">
              <span className="discount-percent">10% OFF</span>
              <span className="discount-text">Full payments</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;