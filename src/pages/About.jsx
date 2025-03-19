import '../styles/About.css';

const About = () => {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <h1>About <span className="highlight">Us</span></h1>
          <p className="lead">Your trusted IT partner in Malawi</p>
        </div>
      </section>
      
      <section className="about-content section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-text">
              <h2>Our <span className="highlight">Story</span></h2>
              <p>
                Founded in 2020, KadionSystems has been providing top-tier IT services to businesses across Malawi. We started with a simple mission: to make technology accessible and affordable for local businesses.
              </p>
              <p>
                What began as a small team of passionate tech enthusiasts has grown into a comprehensive IT service provider, helping businesses of all sizes leverage technology to grow and succeed.
              </p>
              <h2>Our <span className="highlight">Mission</span></h2>
              <p>
                To empower Malawian businesses through innovative, accessible, and affordable technology solutions that drive growth and success.
              </p>
              <h2>Our <span className="highlight">Vision</span></h2>
              <p>
                To be the leading IT support and programming services provider in Malawi, recognized for excellence, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="about-illustration"></div>
              </div>
            </div>
          </div>
          
          <div className="values-section">
            <h2 className="text-center">Our <span className="highlight">Values</span></h2>
            <div className="grid grid-3">
              <div className="value-card card">
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do, from code quality to customer service.</p>
              </div>
              <div className="value-card card">
                <h3>Innovation</h3>
                <p>We embrace new technologies and approaches to provide cutting-edge solutions.</p>
              </div>
              <div className="value-card card">
                <h3>Integrity</h3>
                <p>We conduct business with honesty, transparency, and respect for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
