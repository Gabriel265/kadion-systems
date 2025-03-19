import { FaCode, FaMobile, FaServer, FaCogs } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Website Development',
      icon: <FaCode />,
      description: 'Custom websites from basic to e-commerce solutions with responsive design and SEO optimization.',
      tiers: [
        { name: 'Basic', price: 'MWK 170,000 ($100)' },
        { name: 'Professional', price: 'MWK 500,000 ($300)' },
        { name: 'E-commerce', price: 'MWK 1,000,000 ($600)' }
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: <FaMobile />,
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      tiers: [
        { name: 'Basic', price: 'MWK 500,000 ($300)' },
        { name: 'Professional', price: 'MWK 1,000,000 ($600)' },
        { name: 'Enterprise', price: 'MWK 1,500,000+ ($900+)' }
      ]
    },
    {
      id: 3,
      title: 'Hosting & Domain Services',
      icon: <FaServer />,
      description: 'Reliable hosting solutions and domain registration to keep your business online.',
      tiers: [
        { name: 'Basic Hosting', price: 'MWK 12,000 ($7)/month' },
        { name: 'Premium Hosting', price: 'MWK 20,000 ($12)/month' },
        { name: 'Domain Registration', price: 'MWK 12,000 ($7)/year' }
      ]
    },
    {
      id: 4,
      title: 'IT Support',
      icon: <FaCogs />,
      description: 'Comprehensive IT support services including security, network setup, and desktop installation.',
      tiers: [
        { name: 'Hourly Support', price: 'MWK 25,000 ($15)/hour' },
        { name: 'Network Installation', price: 'From MWK 25,000 ($15)/point' }
      ]
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our <span className="highlight">Services</span></h2>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
        
        <div className="services-grid grid grid-2">
          {servicesList.map(service => (
            <div key={service.id} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tiers">
                {service.tiers.map((tier, index) => (
                  <div key={index} className="tier">
                    <span className="tier-name">{tier.name}:</span>
                    <span className="tier-price">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
