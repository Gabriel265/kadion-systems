import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Our <span className="highlight">Services</span></h1>
          <p className="lead">Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>
      
      <Services />
      
      <section className="service-process section">
        <div className="container">
          <h2 className="text-center">How We <span className="highlight">Work</span></h2>
          <div className="process-steps grid grid-4">
            <div className="process-card card">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We start with a thorough consultation to understand your needs and requirements.</p>
            </div>
            <div className="process-card card">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We develop a detailed project plan with timelines and deliverables.</p>
            </div>
            <div className="process-card card">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Our team executes the plan with regular updates and milestones.</p>
            </div>
            <div className="process-card card">
              <div className="step-number">4</div>
              <h3>Support</h3>
              <p>We provide ongoing support and maintenance to ensure everything runs smoothly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
