import React from "react"

import Carousel from "../carousel"

import eden1 from "../../images/carousel/eden/eden1.jpg"
import eden2 from "../../images/carousel/eden/eden2.jpg"
import eden3 from "../../images/carousel/eden/eden3.jpg"
import eden4 from "../../images/carousel/eden/eden4.jpg"
import eden5 from "../../images/carousel/eden/eden5.jpg"

function EdenText(props) {
  return (
    <div>
      <Carousel
        images={[
          { image: eden1, alt: "Website homepage screenshot" },
          { image: eden2, alt: "Website tour page screenshot" },
          { image: eden3, alt: "Website music page screenshot" },
          { image: eden4, alt: "Website contact page screenshot" },
          { image: eden5, alt: "Website store page screenshot" },
        ]}
      />
      This project was created as part of a website design module during my
      degree. We were breifed with creating a static website using HTML and CSS
      which
    </div>
  )
}

export default EdenText
