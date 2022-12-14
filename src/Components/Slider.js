import React from "react";

function Slider() {
  return (
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner carousel-content" role="listbox">
        <div className="item active">
          <img src="/images/abbe-sublett-nxZDMUQhN4o-unsplash.jpg" alt="..." />
        </div>
        <div className="item">
          <img src="/images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" alt="..." />
        </div>
        <div className="item">
          <img src="/images/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="..." />
        </div>
      </div>

      <a
        className="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span
          className="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
