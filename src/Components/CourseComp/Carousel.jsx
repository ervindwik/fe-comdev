import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/img-course.png'
import image2 from '../../assets/img-course.png'

function Slider() {
  return (
    <Carousel id="carousel-section">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption id="caption">
          <h5>1</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption id="caption">
          <h5>2</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;