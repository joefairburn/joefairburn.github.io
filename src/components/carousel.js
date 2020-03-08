import React, { useState } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import Back from "../images/icons8-back"
import Next from "../images/icons8-forward"


function Carousel(props) {

  const imageList = props.images.map((image,index) => 
    <Slide key={index} index={index} > 
      <img src={image.image} className="carousel-img" alt= {image.alt} />
    </Slide>
  );

  return (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={props.images.length}
            infinite={true}
          >
            <div className="carousel-container">
            <Slider>
              {imageList}
            </Slider>
            { props.images.length > 1 &&
            <div>
            <ButtonBack className="btn carousel-btn btn-left"><Back size={20} /></ButtonBack>
            <ButtonNext className="btn carousel-btn btn-right"><Next size={20} /></ButtonNext>
            </div>
}
            </div>
          </CarouselProvider>
  )
}

export default Carousel
