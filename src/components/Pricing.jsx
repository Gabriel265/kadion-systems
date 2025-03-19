import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Transparent <span className="highlight">Pricing</span></h2>
          <p>Affordable IT solutions with flexible payment options</p>
        </div>
        
        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Basic Tier</th>
                <th>Professional Tier</th>
                <th>Enterprise Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Development</td>
                <td>MWK 170,000 ($100)</td>
                <td>MWK 500,000 ($300)</td>
                <td>MWK 1,000,000 ($600)</td>
              </tr>
              <tr>
                <td>Mobile App Development</td>
                <td>MWK 500,000 ($300)</td>
                <td>MWK 1,000,000 ($600)</td>
                <td>MWK 1,500,000+ ($900+)</td>
              </tr>
              <tr>
                <td>Hosting (Monthly)</td>
                <td>MWK 10,000 ($6)</td>
                <td>MWK 20,000 ($12)</td>
                <td>MWK 20,000 ($12)</td>
              </tr>
              <tr>
                <td>Domain (Yearly)</td>
                <td>MWK 12,000 ($7)</td>
                <td>MWK 12,000 ($7)</td>
                <td>MWK 12,000 ($7)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="discounts-section">
          <h3>Discounts & Incentives</h3>
          <div className="discounts-grid grid grid-2">
            <div className="discount-card card">
              <h4>Annual Prepayment</h4>
              <p>10% off when you pay for a full year of services</p>
            </div>
            <div className="discount-card card">
              <h4>Educational Institutions</h4>
              <p>10% off all services for schools and universities</p>
            </div>
            <div className="discount-card card">
              <h4>Referrals</h4>
              <p>10% off your next project when you refer a new client</p>
            </div>
            <div className="discount-card card">
              <h4>Seasonal Promotions</h4>
              <p>15% off all services during holidays (December 15 - January 15)</p>
            </div>
          </div>
        </div>
        
        <div className="payment-section">
          <h3>Flexible Payment Plans</h3>
          <div className="payment-grid grid grid-3">
            <div className="payment-card card">
              <h4>Pay-As-You-Go</h4>
              <p>20% down payment with milestone-based payments</p>
            </div>
            <div className="payment-card card">
              <h4>Monthly Installments</h4>
              <p>Spread costs over 6-12 months with no interest for first 6 months</p>
            </div>
            <div className="payment-card card">
              <h4>Full Payment</h4>
              <p>Get 10% off when you pay the full amount upfront</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
