import React from 'react';

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
            <div className="badge badge-secondary">{props.date}</div>
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

export default Certficate;