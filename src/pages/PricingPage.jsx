import Pricing from '../components/Pricing';
import ServicePackages from '../components/ServicePackages';

const PricingPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Our <span className="highlight">Pricing</span></h1>
          <p className="lead">Transparent and flexible pricing options</p>
        </div>
      </section>
      
      <Pricing />
      <ServicePackages />
    </main>
  );
};

export default PricingPage;
