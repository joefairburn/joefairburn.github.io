import React from "react"

import Carousel from "../carousel"

import typetest1 from "../../images/carousel/typetest/typetest1.jpg"
import typetest2 from "../../images/carousel/typetest/typetest2.jpg"
import typetest3 from "../../images/carousel/typetest/typetest3.jpg"

function TypeTestText(props) {

  return (
    <div>
      <Carousel
        images={[
          { image: typetest1, alt: "Website homepage screenshot" },
          { image: typetest2, alt: "Website tour page screenshot" },
          { image: typetest3, alt: "Website music page screenshot" }
        ]}
      />
        This website was created as part of a research project, looking at how to improve users typing speed in typing speed tests. The 
    </div>
  )
}

export default TypeTestText