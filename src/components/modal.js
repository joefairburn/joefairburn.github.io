import React, { useState } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"
import Carousel from "../components/carousel";
import { useSpring, animated as a } from "react-spring"


function Modal(props) {
  const [modalHiddenState, setModalHiddenState] = useState(false)

  const modalBackgroundAnimation = useSpring({
    config: { duration: 200 },
    opacity: props.modalIsHidden ? 0 : 1,
    from: { opacity: 0 },
    reverse: modalHiddenState,
    onRest: () => {
      console.log("dsa")
      if (modalHiddenState === true) {
        setModalHiddenState(false)
        props.closeModal()
      }
    },
  })

  const modalAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 21 },
    top: props.modalIsHidden ? 2000 : 0,
    height: props.modalIsHidden ? "0%" : "90em",
    width: props.modalIsHidden ? "0%" : "60em",
    from: { top: 2000, height: "0%", width: "0%" },
    reverse: modalHiddenState,
  })

  const clickToClose = () => setModalHiddenState(true)
  return !props.modalIsHidden ? (
    <div className={"modal-container"}>
      <a.div className="modal" style={modalAnimation}>
        <div className="modal-header">
          <div className="modal-title-container">
            <h1 className="modal-title">{props.title}</h1>
            
          </div>
          <div className="modal-x-container">
            <div className="modal-x" onClick={clickToClose} />
          </div>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        {props.url && (
              <a
                href={props.url}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-modal"
              >
                <span>Visit Project</span>
              </a>
            )}
      </a.div>
      <a.div
        className={"modal-background"}
        style={modalBackgroundAnimation}
        onClick={clickToClose}
      />
    </div>
  ) : (
    <div></div>
  )
}

export default Modal
