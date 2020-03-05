import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {carouselImages} from "../../About/AboutContent";

class CarouselWithoutArrows extends Component {
  render() {

    let carouselItem = carouselImages.map((content, i) =>
      <Carousel.Item key={i}>
        <div key={i}>
          <img
            key={i}
            className=" w-50 carousel-img"
            src={content.img}
            alt=""
          />
        </div>
      </Carousel.Item>);

    return (
      <div>
        <Carousel controls={false} interval={2000}>
          {carouselItem}
        </Carousel>
      </div>
    );
  }
}

export default CarouselWithoutArrows;
