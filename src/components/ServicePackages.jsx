import { Link } from 'react-router-dom';
import '../styles/ServicePackages.css';

const ServicePackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Startup Accelerator',
      price: 'MWK 600,000 ($360)',
      features: [
        'Basic Website Development',
        '1 year web hosting',
        'Domain Registration',
        'Basic IT support (5 hours/month)',
        'Email setup (3 Accounts)'
      ],
      recommended: false
    },
    {
      id: 2,
      title: 'Business Growth',
      price: 'MWK 1,500,000 ($900)',
      features: [
        'Professional website with CMS',
        'Premium Hosting',
        'Network setup up to 10 points',
        'Security Implementation',
        '15 hours monthly support'
      ],
      recommended: true
    },
    {
      id: 3,
      title: 'Enterprise Solution',
      price: 'MWK 3,000,000 ($1,800)',
      features: [
        'Custom Software Development',
        'Advanced Security Implementation',
        'Dedicated Support Team',
        'Priority Response time',
        'Comprehensive IT infrastructure'
      ],
      recommended: false
    }
  ];

  return (
    <section className="packages section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Service <span className="highlight">Packages</span></h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
        
        <div className="packages-grid grid grid-3">
          {packages.map(pkg => (
            <div 
              key={pkg.id} 
              className={`package-card card ${pkg.recommended ? 'recommended' : ''}`}
            >
              {pkg.recommended && <div className="recommendation-badge">Popular Choice</div>}
              <h3>{pkg.title}</h3>
              <div className="package-price">{pkg.price}</div>
              <ul className="package-features">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary package-btn">Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
