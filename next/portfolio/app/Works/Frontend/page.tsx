import Footer from '@/app/components/Footer';
import Frontend from '@/app/components/Frontend';
import Header from '@/app/components/Header';
import React from 'react';

function Page() {
  return (
    <div>

      <Header />

      <div className="section-container">
        <section className="section">

          <nav className="section-nav">
            <h1 className='font-semibold'>
              Work Related to Frontend Web Dev
            </h1>
          </nav>

          <Frontend />

        </section>
      </div>

      <Footer />

    </div>
  );
}

export default Page;