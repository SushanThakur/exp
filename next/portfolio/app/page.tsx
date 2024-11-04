import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Certficates from "./components/Certficates";

export default function Home() {

  return (
    <div>
      <Header />

      <main className="flex flex-col justify-center items-center gap-[10vh]">
        <div className="flex flex-col min-h-[50vh] gap-8 justify-center mt-16 items-center sm:flex-row-reverse sm:max-w-[80vw] sm:justify-center lg:w-[80vw] lg:justify-between lg:max-w-[1400px]">
          <div className="avatar">
            <div className="w-[52vw] max-w-[340px] rounded-xl sm:w-[20vw]">
              <img src='/pfp.jpg' alt="Sushant Thakur Display Picture" className="hoverEff" />
            </div>
          </div>
          <section className="text-center flex flex-col items-center gap-4 max-w-[94vw] sm:text-left sm:items-start sm:max-w-[600px] lg:max-w-[800px]">
            <h1 className="text-3xl font-bold">Hi, I am Sushant, <br className="hidden sm:flex" />
              Electrical Engineering Student.
            </h1>
            <p className="">
              I am a First Year Electrical Engineering student with a passion for robotics, system design, and programming. I enjoy working on complex robotic projects and have gained hands-on experience in designing...
              <span className="hidden">
                innovative solutions. My dedication to continuous learning and problem-solving drives me to push the boundaries of technology and engineering through creative and efficient designs.
              </span>
              <Link href='/AboutMe' className="font-semibold"> Read more</Link>
            </p>
            <form action="/Resume.pdf">
              <button className="btn sm:btn-sm md:btn-md lg:btn-lg max-w-[300px]">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </form>
          </section>
        </div>

        <div className="section-container bg-green-200 py-10">
          <section className="section">
            <nav className="font-semibold">
              <h2>Featured Posts</h2>
              <Link href='/'>View All</Link>
            </nav>
            <div className="featured-container">
              {/* Cart Starts */}
              <Cards />
              {/* Cart Ends */}
            </div>
          </section>
        </div>

        <div className="section-container">
          <section className="section">
            <nav className="font-semibold">
              <h2>Featured Certificates</h2>
              <Link href='/AboutMe'>View All</Link>
            </nav>
            <div className="featured-container">
              {/* Cart Starts */}
              <Certficates />
              {/* Cart Ends */}
            </div>
          </section>
        </div>

      </main>

      <Footer />

    </div>
  );
}
