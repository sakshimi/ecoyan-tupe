import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ecoyaan</h1>
          <p>Your destination for eco-friendly products.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section className="product-highlights">
        <h2>Featured Products</h2>
        {/* Product cards or carousel */}
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
