import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Page() {
  return (
    <div>
      <Header />

      <div className="section-container py-10">
        <section className="section">
          <nav className="font-semibold">
            <h1>Blogs</h1>
          </nav>
          <div className="featured-container">
            {/* Cart Starts */}
            <Cards />
            <Cards />
            {/* Cart Ends */}
          </div>
        </section>
      </div>
      <div className=''>
        <Footer />
      </div>

    </div>
  );
}

export default Page;