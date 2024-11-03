import React from 'react';
import Link from 'next/link';

function Card(
  props: {
    title: string,
    author: string,
    date: string,
    shortDesc: string,
  }
) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hoverEff animationAppear">
        <div className="card-body">
          <h2 className="card-title">
            <Link href='/'>
              {props.title}
            </Link>
          </h2>
          <p className="text-sm text-slate-400">By {props.author}, {props.date} </p>
          <p> {props.shortDesc} </p>
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
    </div>
  );
}

export default Card;  