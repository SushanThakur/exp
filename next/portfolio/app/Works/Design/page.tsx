import React from 'react';
import Cards from '@/app/components/Cards';
import Header from '@/app/components/Header';
import Design from '@/app/components/Design';
import Footer from '@/app/components/Footer';

function Page() {
  return (
    <>
      <Header />
      <div className="section-container py-10">
        <section className="section">
          <nav className="font-semibold">
            <h2>Featured Designs </h2>
          </nav>
          <div className="featured-container">
            {/* Cart Starts */}
            <Design />
            {/* Cart Ends */}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Page;