import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Card from "./components/Card";
import Certficates from "./components/Certficates";

export default function Home() {

  const postCard = {
    title: "Getting Started With ROS 2: A Beginner's Guide",
    author: "Sushant Thakur",
    date: "Sep 24 2024",
    shortDesc: "Robotics is evolving rapidly, and with the rise of powerful open-source tools like ROS (Robot Operating System), it's easier than ever to develop and control robots.",
  }

  const cert1 = {
    img: '/python-bootcamp.webp',
    title: 'Python Bootcamp 2021',
    date: '2021',
    cat1: 'Programming',
    cat2: '',
    desc: "I completed this course while I was in 9th grade, which was a significant milestone for me. Since I was already familiar with C-Programming concepts, learning Python became much easier for me. This prior knowledge not only accelerated my learning but also allowed me to appreciate Python’s simplicity and flexibility in comparison to C. ",
  }

  const cert2 = {
    img: 'cProgrammingWorkshop.webp',
    title: '7 Days Wrokshop on C-Programming',
    date: '2021',
    cat1: 'Programming',
    cat2: '',
    desc: "C was the first programming language I learned, starting in 7th grade, though I found it too complex initially and completed it in 8th grade. In 9th grade, I participated in this workshop meant for bachelor's students and secured 2nd place. The coordinators were so impressed that they refunded my enrollment fee and praised my skills. They encouraged my parents to support me in my programming journey.",
  }

  const cert3 = {
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

        <div className="section-container bg-green-500 py-10">
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
