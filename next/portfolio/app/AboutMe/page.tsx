import React from 'react';
import Header from '../components/Header';
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

function Page() {
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

            <h2>Git Stat</h2>
            <p>
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=sushanthakur&amp;" alt="Sushant Thakur Github Stat" className='hoverEff animationAppear' />
            </p>
            <a href='https://github.com/SushanThakur' target='_blank' className="link link-primary flex gap-2">
              Visit My GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>

            </a>

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

export default Page;