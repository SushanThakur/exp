import React from 'react';

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

function Certificates() {
  return (
    <>
      <Certficate {...cert1} />
      <Certficate {...cert2} />
      <Certficate {...cert3} />
    </>
  )
}

function Certficate(
  props: {
    img: string,
    title: string,
    date: string,
    cat1: string,
    cat2: string,
    desc: string,
  }
) {
  return (
    <div>
      <div className="card bg-blue-200 w-96 shadow-xl p-4 rounded-none hoverEff animationAppear">
        <figure>
          <img
            src={props.img}
            alt={props.title} />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title">
            {props.title}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary bg-slate-900 border-slate-900 font-bold">{props.date}</div>
            <div className="badge badge-outline">{props.cat1}</div>
            <div className="badge badge-outline">{props.cat2}</div>
          </div>
          <p>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;