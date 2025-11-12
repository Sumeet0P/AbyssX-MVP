import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide my-16">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/bw-model.png" className="d-block w-200" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/collage.png" className="d-block w-200" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/female-1.png" className="d-block w-200" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/female-2.png" className="d-block w-200" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="">Next</span>
        </button>
        <p className="text-xs">NEW SUMMER COLLECTION</p>
      </div>
    </>
  );
};

export default Carousel;
