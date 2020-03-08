import React, { useState } from "react"
import { useSpring, animated as a} from "react-spring"
import SEO from "../components/seo"
import WorkItem from "../components/workItem"

import Modal from "../components/modal"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

import "../components/styles.css"

import EdenText from "../components/modal-data/eden"
import BiologyQuizText from "../components/modal-data/biologyquiz"
import ForgetMeNotText from "../components/modal-data/forgetmenot"
import JungleGamesText from "../components/modal-data/junglegames"
import TypeTestText from "../components/modal-data/typetest"

import junglegamesimage from "../images/junglegames.png"
import biologyquizimage from "../images/biologyquiz.png"
import typetestimage from "../images/typetest.png"
import edenimage from "../images/eden.png"
import forgetmenotimage from "../images/forgetmenot.png"

import WakaTime from "../components/wakatime"

function Index() {

  const emailAddress = "joe.fairburn1&#64;gmail.com";
  const [{ st, sk }, set] = useSpring(() => ({ st: 0, sk: 0 }))
  const interpTopRow = st.interpolate(o => `translateX(${o * 0.7}px)`)
  const interpMiddleRow = st.interpolate(o => `translateX(${-(o * 0.7)}px)`)
  const interpBottomRow = st.interpolate(o => `translateX(${o * 0.7}px)`)
  const interpRotate = sk.interpolate(o => `skewY(${o}deg)`)
  const onScroll = e =>
    set({
      st: e.target.scrollTop,
      sk: Math.min(Math.max(-10, e.target.scrollTop * -0.06), 0),
    });

  const [modal, setModal] = useState({
    title: "",
    content: <div></div>,
    isHidden: true
  });

  const handleModalClose = () => setModal({
    title: "",
    content: <div></div>,
    isHidden: true,
  });
  
  const handleModalShow = (title, newText, url) => setModal({
    title: title,
    content: newText,
    isHidden: false,
    url: url
  });


  

  return (
    <main onScroll={modal.isHidden ? onScroll : undefined}>
      <div className="index">
        <SEO title="Home" />
        <header>
          <a.div
            className="background-image"
            style={{ transform: interpRotate }}
          />
          <div className="header-background">
            <div
              style={{
                transform: "skewY(-10deg)",
                width: "100%",
                height: "100%",
              }}
            >
              <a.div
                className="rect-row top-row"
                style={{ transform: interpTopRow, width: "100%" }}
              >
                <span />
                <span />
              </a.div>
              <a.div
                className="rect-row middle-row"
                style={{ transform: interpMiddleRow, width: "100%" }}
              >
                <span />
                <span />
              </a.div>
              <a.div
                className="rect-row bottom-row"
                style={{ transform: interpBottomRow, width: "100%" }}
              >
                <span />
                <span />
                <span />
                <span />
              </a.div>
            </div>
          </div>

          <div className="centered-title">
            <div className="name-dev">
            <h1 className="title-name">Joe Fairburn</h1>
            <h2 className="dev-name">Full-stack developer</h2>
            </div>
            <WakaTime />
          </div>
        </header>

        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-title">
            <h1>My Work</h1>
          </div>
          <div className="portfolio-items">
            <WorkItem image={junglegamesimage} text={"The Jungle Games"} itemClicked={() => handleModalShow("The Jungle Games", <JungleGamesText />)} />
            <WorkItem image={biologyquizimage} text={"Research Quiz"} itemClicked={() => handleModalShow("Research Quiz", <BiologyQuizText />, "/quiz")} />
            <WorkItem image={typetestimage} text={"Typing Test"} itemClicked={() => handleModalShow("Typing Test", <TypeTestText />, "/typetest")} />
            <WorkItem image={forgetmenotimage} text={"ForgetMeNot"} itemClicked={() => handleModalShow("ForgetMeNot", <ForgetMeNotText />)} />
            <WorkItem image={edenimage} text={"Promotional Site"} itemClicked={() => handleModalShow("Promotional Site", <EdenText />,"/eden")} />
          </div> 
          <Modal title={modal.title} url={modal.url} modalIsHidden={modal.isHidden} closeModal={handleModalClose} >
            {modal.content}
          </Modal>
        </section>
        <section className="contact-me">
          <div className="contact-content">
            <div className="contact-title">
              <h1>Contact Me</h1>
            </div>
            <div className="contact-container">
              <ul className="contact-list">
                  <li> <a className="github-image" href="https://www.github.com/joefairburn" target="_blank" rel="noopener noreferrer"/></li>
                  <li><a className="linkedin-image" href="www.linkedin.com/in/joefairburn" target="_blank" rel="noopener noreferrer" /> </li>
                  <li><a className="mail-image" href="mailto:joe.fairburn1&#64;gmail.com" target="_blank" rel="noopener noreferrer" /> </li>  
              </ul>
            </div>
          </div>
          <div className="background-container">
            <div className="background-image second-image" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Index
