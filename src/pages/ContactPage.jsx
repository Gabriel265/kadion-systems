import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Contact <span className="highlight">Us</span></h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </section>
      
      <Contact />
      
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            {/* In a real project, you'd add a Google Maps or other map component here */}
            <div className="map-placeholder">
              <p className="text-center">Map of our location in Lilongwe City Center, Malawi</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
