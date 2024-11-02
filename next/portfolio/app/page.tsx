import Link from "next/link";
import Header from "./components/Header"

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col justify-center items-center gap-[10vh]">
        <div className="flex flex-col gap-8 items-center my-8 sm:flex-row-reverse sm:max-w-[80vw] sm:justify-center lg:w-[80vw] lg:justify-between lg:max-w-[1400px]">
          <div className="avatar">
            <div className="w-[52vw] max-w-[340px] rounded-xl sm:w-[20vw]">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <section className="text-center flex flex-col items-center gap-4 max-w-[94vw] sm:text-left sm:items-start sm:max-w-[600px]">
            <h1 className="text-2xl font-bold">Hi, I am Sushant, <br className="hidden sm:flex" />
              Electrical Engineering Student.
            </h1>
            <p>
              I am a First Year Electrical Engineering student with a passion for robotics, system design, and programming. I enjoy working on complex robotic projects and have gained hands-on experience in designing ...
              <Link href='/' className="font-semibold"> Read more</Link>
              {/* innovative solutions. My dedication to continuous learning and problem-solving drives me to push the boundaries of technology and engineering through creative and efficient designs. */}
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
            <nav className="text-xl font-semibold">
              <h2>Featured Posts</h2>
              <Link href='/'>View All</Link>
            </nav>
            <div className="featured-container">
              {/* Cart Starts */}
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
              {/* Cart Ends */}
            </div>
          </section>
        </div>

        <div className="section-container">
          <section className="section">
            <nav className="text-xl font-semibold">
              <h2>Featured Certificates</h2>
              <Link href='/'>View All</Link>
            </nav>
            <div className="flex flex-col max-w-[360px] ">
              {/* Cart Starts */}
              <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                  <img
                    src="https://sushant.uk/assets/media/personal/certificates/python-bootcamp.webp"
                    className="w-full" />
                </div>
                <div className="z-10 bg-base-200 collapse">
                  <input type="checkbox" className="peer" />
                  <div
                    className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                  </div>
                  <div
                    className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                  </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                  <img
                    src="https://sushant.uk/assets/media/personal/certificates/cProgrammingWorkshop.webp"
                    className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn">1</a>
                <a href="#item2" className="btn">2</a>
                <a href="#item3" className="btn">3</a>
                <a href="#item4" className="btn">4</a>
              </div>
              {/* Cart Ends */}
            </div>
          </section>
        </div>

      </main>

    </div>
  );
}
