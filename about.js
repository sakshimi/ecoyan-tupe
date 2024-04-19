import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />

      <section className="company-overview">
        <h2>About Ecoyaan</h2>
        <p>We are committed to providing sustainable products...</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        {/* List of values */}
      </section>

      <section className="team">
        <h2>Our Team</h2>
        {/* Team member profiles */}
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
