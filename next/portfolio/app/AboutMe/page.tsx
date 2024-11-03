import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import Certficate from '../components/Certficate';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const cert1 = {
  img: 'https://sushant.uk/assets/media/personal/certificates/locusParticipant.webp',
  title: 'Winner of Plus Two Award In LOCUS 2024 Exhibition',
  date: '2024',
  cat1: 'Robotics',
  cat2: 'Programming',
  desc: "I created a 5DOF robotic arm, named 'Armikochan,' and showcased it at the LOCUS 2024 exhibition, where it received an overwhelmingly positive response. A local newspaper even featured an article about the project, and my high school shared it on their page. This experience helped me build valuable contacts and gain recognition. (more about this project in 'Works' tab) ",
}

function page() {
  return (
    <div>
      <Header />

      <div className="section-container">
        <section className="section">
          <nav className="font-semibold">
            <h1 className='text-3xl'>Sushant Thakur</h1>
          </nav>
          <div className='leftAlign'>
            <h2>About</h2>
            <p>
              I am a First Year Electrical Engineering student with a passion for robotics, system design, and programming. I enjoy working on complex robotic projects and have gained hands-on experience in designing innovative solutions. My dedication to continuous learning and problem-solving drives me to push the boundaries of technology and engineering through creative and efficient designs.
            </p>
            <h2>Personal Information</h2>
            <p>
              <b>Date Of Birth:</b> 2006-07-23 <br />
              <b>Languages:</b> English, Nepali, Hindi and Maithili<br />
              <b>Temporary Address:</b> Mahalaxmi 04, Imadol, Lalitpur <br />
              <b>Nationality:</b> Nepalese
            </p>
            <h2>Skills</h2>

            <Skills />

            <h2>Education</h2>
            <Timeline />

            <h2>Certificates</h2>
            <div className="featured-container">
              {/* Cart Starts */}
              <Certficate {...cert1} />
              <Certficate {...cert1} />
              <Certficate {...cert1} />
              {/* Cart Ends */}
            </div>
          </div>
        </section>
      </div>

      <Footer />

    </div>
  );
}

export default page;