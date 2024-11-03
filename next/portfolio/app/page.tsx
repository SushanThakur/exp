import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Card from "./components/Card";
import Certficate from "./components/Certficate";

export default function Home() {

  const postCard = {
    title: "Getting Started With ROS 2: A Beginner's Guide",
    author: "Sushant Thakur",
    date: "Sep 24 2024",
    shortDesc: "Robotics is evolving rapidly, and with the rise of powerful open-source tools like ROS (Robot Operating System), it's easier than ever to develop and control robots.",
  }

  const cert1 = {
    img: 'https://sushant.uk/assets/media/personal/certificates/locusParticipant.webp',
    title: 'Winner of Plus Two Award In LOCUS 2024 Exhibition',
    date: '2024',
    cat1: 'Robotics',
    cat2: 'Programming',
    desc: "I created a 5DOF robotic arm, named 'Armikochan,' and showcased it at the LOCUS 2024 exhibition, where it received an overwhelmingly positive response. A local newspaper even featured an article about the project, and my high school shared it on their page. This experience helped me build valuable contacts and gain recognition. (more about this project in 'Works' tab) ",
  }

  return (
    <div>
      <Header />

      <main className="flex flex-col justify-center items-center gap-[10vh]">
        <div className="flex flex-col min-h-[50vh] gap-8 justify-center mt-16 items-center sm:flex-row-reverse sm:max-w-[80vw] sm:justify-center lg:w-[80vw] lg:justify-between lg:max-w-[1400px]">
          <div className="avatar">
            <div className="w-[52vw] max-w-[340px] rounded-xl sm:w-[20vw]">
              <Image src='/pfp.jpg' width='200' height='200' alt="Sushant Thakur Display Picture" className="hoverEff" />
            </div>
          </div>
          <section className="text-center flex flex-col items-center gap-4 max-w-[94vw] sm:text-left sm:items-start sm:max-w-[600px] lg:max-w-[800px]">
            <h1 className="text-4xl font-bold">Hi, I am Sushant, <br className="hidden sm:flex" />
              Electrical Engineering Student.
            </h1>
            <p className="text-lg">
              I am a First Year Electrical Engineering student with a passion for robotics, system design, and programming. I enjoy working on complex robotic projects and have gained hands-on experience in designing...
              <span className="hidden">
                innovative solutions. My dedication to continuous learning and problem-solving drives me to push the boundaries of technology and engineering through creative and efficient designs.
              </span>
              <Link href='/' className="font-semibold"> Read more</Link>
            </p>
            <button className="btn sm:btn-sm md:btn-md lg:btn-lg max-w-[300px]">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </section>
        </div>

        <div className="section-container">
          <section className="section">
            <nav className="font-semibold">
              <h2>Featured Posts</h2>
              <Link href='/'>View All</Link>
            </nav>
            <div className="featured-container">
              {/* Cart Starts */}
              <Card title={postCard.title} author={postCard.author} date={postCard.date} shortDesc={postCard.shortDesc} />
              <Card title={postCard.title} author={postCard.author} date={postCard.date} shortDesc={postCard.shortDesc} />
              <Card title={postCard.title} author={postCard.author} date={postCard.date} shortDesc={postCard.shortDesc} />
              {/* Cart Ends */}
            </div>
          </section>
        </div>

        <div className="section-container">
          <section className="section">
            <nav className="font-semibold">
              <h2>Featured Certificates</h2>
              <Link href='/'>View All</Link>
            </nav>
            <div className="featured-container">
              {/* Cart Starts */}
              <Certficate {...cert1} />
              <Certficate {...cert1} />
              <Certficate {...cert1} />
              {/* Cart Ends */}
            </div>
          </section>
        </div>

      </main>

      <Footer />

    </div>
  );
}
