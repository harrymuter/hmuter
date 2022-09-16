import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import Aviva from "../components/aviva"
import UEA from "../components/uea"
import CUP from "../components/cup"
import ImageOfHarry from "../components/imageOfHarry"
import "../assets/css/app.css"
import "../assets/css/index.css"
import html from "../assets/images/html.svg"
import css from "../assets/images/css.svg"
import js from "../assets/images/javascript.svg"
import ts from "../assets/images/typescript.svg"
import python from "../assets/images/python.svg"
import react from "../assets/images/react.svg"
import gatsby from "../assets/images/gatsby.svg"
import aws from "../assets/images/aws.svg"
import netlify from "../assets/images/netlify.svg"
import mongodb from "../assets/images/mongodb.svg"
import jira from "../assets/images/jira.svg"
import figma from "../assets/images/figma.svg"
import ai from "../assets/images/ai.svg"
import git from "../assets/images/git.svg"
import trello from "../assets/images/trello.svg"

export default () => {
  const breakpoint = useRef()
  const sidebar = useRef()

  const handleScroll = () => {
    if (breakpoint.current.getBoundingClientRect().y < 0) {
      if (sidebar.current.classList.contains("hide-sidebar")) {
        sidebar.current.classList.remove("hide-sidebar")
      }
      sidebar.current.classList.add("show-sidebar")
    } else {
      if (sidebar.current.classList.contains("show-sidebar")) {
        sidebar.current.classList.add("hide-sidebar")
        sidebar.current.classList.remove("show-sidebar")
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Layout>
        <div ref={breakpoint} />
        <div className="intro-container">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-heading heading-large">Harry Muter.</h1>
              <br />
              <h2 className="hero-heading heading-small">
                I build websites and stuff.
              </h2>
            </div>
            <div className="hero-image-container">
              <div className="hero-image">
                <ImageOfHarry />
              </div>
            </div>
          </div>
        </div>
        <>
          <div ref={sidebar} className="sidebar">
            <div className="sidebar-item">
              <a
                className="white"
                title="LinkedIn"
                href="https://www.linkedin.com/in/muter/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="sidebar-item">
              <a
                className="white"
                title="Twitter"
                href="https://twitter.com/harrymuter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="sidebar-item">
              <a
                className="white"
                title="GitHub"
                href="https://github.com/harrymuter"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">Technologies and Tools</h2>
            <div className="tools-container">
              <div className="tools-text">
                <p>
                  Some say a bad workman blames their tools, but in this
                  industry making sure you utilise the correct tools and use
                  them to their fullest potential is vital if you want to design
                  and build quality software.
                </p>
                <p>
                  From my academic and professional experiences, these are the
                  languages, technologies and tools that I have built a
                  proficieny with. Of course there are a few more that I hope to
                  add, but I believe this list gives me a functional and
                  well-rounded skillset that allow me to contribute positively
                  to any development project.
                </p>
                <p>
                  I have developed these proficiencies from my work on many
                  projects, primarily in the role of a front-end / full-stack
                  developer, but also from my experiences working alongside UX
                  designers and researchers.
                </p>
              </div>
              <div className="tools-grid">
                <div className="tool">
                  <img className="tool-image" src={html} alt="HTML" />
                  HTML
                </div>
                <div className="tool">
                  <img className="tool-image" src={css} alt="CSS" />
                  CSS
                </div>
                <div className="tool">
                  <img className="tool-image" src={js} alt="JavaScript" />
                  JavaScript
                </div>
                <div className="tool">
                  <img className="tool-image" src={ts} alt="TypeScript" />
                  TypeScript
                </div>
                <div className="tool">
                  <img className="tool-image" src={python} alt="Python" />
                  Python
                </div>
                <div className="tool">
                  <img className="tool-image" src={react} alt="React" />
                  React
                </div>
                <div className="tool">
                  <img className="tool-image" src={gatsby} alt="Gatsby" />
                  Gatsby
                </div>
                <div className="tool">
                  <img className="tool-image" src={aws} alt="AWS" />
                  AWS
                </div>
                <div className="tool">
                  <img className="tool-image" src={netlify} alt="Netlify" />
                  Netlify
                </div>
                <div className="tool">
                  <img className="tool-image" src={mongodb} alt="Mongo DB" />
                  MongoDB
                </div>
                <div className="tool">
                  <img className="tool-image" src={jira} alt="Jira" />
                  Jira
                </div>
                <div className="tool">
                  <img className="tool-image" src={figma} alt="Figma" />
                  Figma
                </div>
                <div className="tool">
                  <img className="tool-image" src={ai} alt="AI" />
                  AI
                </div>
                <div className="tool">
                  <img className="tool-image" src={git} alt="Git" />
                  Git
                </div>
                <div className="tool">
                  <img className="tool-image" src={trello} alt="Trello" />
                  Trello
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <h2>Employment</h2>
            </div>
            <div className="row">
              <div className="col">
                <CUP />
              </div>
              <div className="col lg">
                <h3>Technical Product Analyst</h3>
                <h4>
                  Cambridge University Press &amp; Assessment
                  <span className="blue">2021 - Present</span>
                </h4>
                <p>
                  I left my PhD programme in 2021 after gaining a role as a
                  Technical Product Analyst at Cambridge University Press &amp;
                  Assessment. At the Press I predominantly work alongside
                  projects, ensuring our technical solutions integrate with our
                  exisiting capabilities / tech stack. I am very excited to be
                  working at a firm with such a rich history, and a great
                  mission &amp; ethos. Whilst here I hope to further extend my
                  project management capabilities and gain valuable industry
                  experience.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Aviva />
              </div>
              <div className="col lg">
                <h3>ProductWriter Developer</h3>
                <h4>
                  Aviva
                  <span className="blue">2018 - 2020</span>
                </h4>
                <p>
                  Upon finishing my Master’s degree I gained a position as a
                  developer at the insurance firm Aviva. The team I was part of
                  is responsible for Aviva’s commercial rating algorithms, which
                  manages both underwriting risk acceptance and the pricing of
                  insurance policies. Whilst there I learnt the nuances of
                  working within a global organisation, and gained experience
                  with large-scale unit and integration testing. I left Aviva in
                  September 2020 to pursue my PhD in Business &amp; Management.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <h2>Education</h2>
            </div>
            <div className="row">
              <div className="col">
                <UEA />
              </div>
              <div className="col lg">
                <h3>PhD - Business and Management</h3>
                <h4>
                  University of East Anglia
                  <span className="blue">2020 - 2021</span>
                </h4>
                <p>
                  In 2020, I began studying toward a PhD in Business &amp;
                  Management at the University of East Anglia, with a focus on
                  the applicaiton of big data for performance management in
                  service organisations. Although I very much enjoyed my time
                  here, I left in 2021 after deciding to continue the pursuit of
                  a career in industry.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col lg">
                <h3>MSc - Knowledge Discovery and Datamining</h3>
                <h4>
                  University of East Anglia
                  <span className="blue">2017 - 2018</span>
                </h4>
                <p>
                  When I graduated from my undergraduate studies I wanted to
                  learn more about the field of data science and so subsequently
                  enrolled on the MSc Knowledge Discovery and Datamining course
                  at the University of East Anglia. This course allowed me to
                  learn fundamental data science principles and add further to
                  my understanding of information science. I graduated from this
                  programme with Merit.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col lg">
                <h3>BSc - Business Information Systems</h3>
                <h4>
                  University of East Anglia
                  <span className="blue">2014 - 2017</span>
                </h4>
                <p>
                  My undergraduate course allowed me to pursue a degree that
                  combined my interests in consumer behaviour and computer
                  science. My studies gave me a comprehensive knowledge of both
                  business processes and software engineering principles; of
                  which there was a good mixture of theoretical and practical
                  elements. I graduated from this course in July 2017 with First
                  Class Honours.
                </p>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}
