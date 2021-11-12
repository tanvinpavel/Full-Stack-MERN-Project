import React from "react";
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item parent active">
            <img src="https://www1.djicdn.com/cms/uploads/150ef84c5f79da0f3cee8788b203e5b9@1x.jpg" className="cus-image-resize" alt="..." />
            <div className="carousel-caption mb-3 d-none d-md-block">
              <h1>POWER BEYOND IMAGINATION</h1>
              <p>Featuring a 1-inch CMOS sensor, powerful autonomous functions, and a compact body weighing less than 600 g</p>
            </div>
          </div>
          <div className="carousel-item parent">
            <img src="https://www1.djicdn.com/cms/uploads/d7d76b136bd88ba952a0ec61a100c4cb.jpg" className="d-block w-100 img-resize black-overlay" alt="..." />
            <div className="carousel-caption mb-3 d-none d-md-block">
              <h1>Big World, Big Sensor</h1>
              <p>With a 30 liter spraying tank, the DJI Agras T30 takes aerial spraying efficiency to new heights.</p>
            </div>
          </div>
          <div className="carousel-item parent">
            <img src="https://stormsend1.djicdn.com/stormsend/uploads/ffa803fb88043e4239f7643c4f75cc24.jpg" className="d-block w-100 img-resize black-overlay" alt="..." />
            <div className="carousel-caption mb-3 d-none d-md-block">
              <h1>Explore DJI Products in Different Fields</h1>
              <p>With a 30 liter spraying tank, the DJI Agras T30 takes aerial spraying efficiency to new heights.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
