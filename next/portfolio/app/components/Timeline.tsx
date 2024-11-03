import React from 'react';

const edu1 = {
  id: 1,
  date: "2022",
  heading: "Secondary Education Examination (SEE)",
  inst: "Monastic Sec. Eng. Boarding School, Janakpurdham.",
  gpa: "3.65",
  grade: "A+",
}
const edu2 = {
  id: 2,
  date: "2024",
  heading: "+2, Science, Computer",
  inst: "Capital College And Research Center, Koteshwor",
  gpa: "3.33",
  grade: "A",
}
const edu3 = {
  id: 3,
  date: "Expected. 2029",
  heading: "Electrical Engineering",
  inst: "Institute of Engineering, Pulchowk",
  gpa: "-",
  grade: "-",
}

export default function Timeline() {
  return (
    <div className='w-full'>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full">
        <li className="animationAppear">
          <TimelineCard {...edu1} />
        </li>
        <li className="animationAppear">
          <TimelineCard {...edu2} />
        </li>
        <li className='animationAppear'>
          <TimelineCard {...edu3} />
        </li>
      </ul>
    </div>
  );
}

function TimelineCard(
  props: {
    id: number,
    date: string,
    heading: string,
    inst: string,
    gpa: string,
    grade: string,
  }
) {

  const clasName1 = "timeline-start mb-10 md:text-end rounded-md w-[360px] p-4 timeline-box hoverEff origin-right";
  const clasName2 = "timeline-end mb-10 md:text-end rounded-md w-[360px] p-4 timeline-box hoverEff origin-left";

  return (
    <>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div className={(props.id % 2) !== 0 ? clasName1 : clasName2}>
        <time className="font-mono italic">{props.date}</time>
        <div className="text-lg font-black">{props.heading}</div>
        {props.inst}
        <br />
        {props.gpa} | {props.grade}
      </div>
      <hr />
    </>
  );
}
