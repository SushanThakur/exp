import React from 'react';

const front1 = {
  url: '',
  title: '',
  desc: '',
}

function Frontend() {
  return (
    <div>
      <div className="card glass w-96 animationAppear hoverEff">
        <figure>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0vhNMjYq-n0L7IQtibirIJeKga3qGrRe0HkH2Y_Xj-pf6_7TyEUcHua7vsWwetaOk4BYyD3ZhiYOF7VOlIePbCxmsT4icK6Gci_Uh-43ojrivPCoZWXCHLVCAEC-asMKs3ebiIOMmw5w/s1600/Coming+Soon2.jpg"
            alt="car!"
            className='h-[200px] aspect-auto'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Featured Work</h2>
          <p>Will be added soon.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;