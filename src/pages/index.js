import React, { useEffect, useRef, useState } from "react"
import FadeInElement from "../components/FadeInElement"
import Layout from "../components/layout"
import cupa from "../assets/images/cupa.svg"
import aviva from "../assets/images/aviva.svg"
import uea from "../assets/images/uea.svg"
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
import wordpress from "../assets/images/wordpress.svg"
import shopify from "../assets/images/shopify.svg"
import aws from "../assets/images/aws.svg"
import netlify from "../assets/images/netlify.svg"
import stripe from "../assets/images/stripe.svg"
import strapi from "../assets/images/strapi.svg"
import mongodb from "../assets/images/mongodb.svg"
import mysql from "../assets/images/mysql.svg"
import jira from "../assets/images/jira.svg"
import figma from "../assets/images/figma.svg"
import ai from "../assets/images/ai.svg"
import git from "../assets/images/git.svg"
import trello from "../assets/images/trello.svg"

const Index = () => {
  const breakpoint = useRef()
  const sidebar = useRef()
  const [showSideBar, setShowSideBar] = useState(false)

  const handleScroll = () => {
    if (breakpoint.current.getBoundingClientRect().y < 0) {
      setShowSideBar(true)
    } else {
      setShowSideBar(false)
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
          <div
            ref={sidebar}
            className={`sidebar${
              showSideBar ? " show-sidebar" : " hide-sidebar"
            }`}
          >
            <div className="sidebar-item">
              <a
                aria-label="LinkedIn"
                title="LinkedIn"
                href="https://www.linkedin.com/in/muter/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="social-icon-banner"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="sidebar-item">
              <a
                aria-label="Twitter"
                title="Twitter"
                href="https://twitter.com/harrymuter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  className="social-icon-banner"
                >
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
            <div className="sidebar-item">
              <a
                aria-label="GitHub"
                title="GitHub"
                href="https://github.com/harrymuter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  className="social-icon-banner"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <FadeInElement>
            <div className="section">
              <h2 className="section-title">Technologies and Tools</h2>
              <div className="tools-container">
                <div className="tools-text">
                  <p>
                    Some say a bad workman blames their tools, but in this
                    industry making sure you utilise the correct tools and use
                    them to their fullest potential is vital if you want to
                    design and build quality software.
                  </p>
                  <p>
                    From my academic and professional experiences, these are the
                    languages, technologies and tools that I have built a
                    proficieny with. Of course there are a few more that I hope
                    to add, but I believe this list gives me a functional and
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
                    <img
                      className="tool-image"
                      src={wordpress}
                      alt="Wordpress"
                    />
                    Wordpress
                  </div>
                  <div className="tool">
                    <img className="tool-image" src={shopify} alt="Shopify" />
                    Shopify
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
                    <img className="tool-image" src={stripe} alt="Stripe" />
                    Stripe
                  </div>
                  <div className="tool">
                    <img className="tool-image" src={strapi} alt="Strapi" />
                    Strapi
                  </div>
                  <div className="tool">
                    <img className="tool-image" src={mongodb} alt="Mongo DB" />
                    MongoDB
                  </div>
                  <div className="tool">
                    <img className="tool-image" src={mysql} alt="MySQL" />
                    MySQL
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
          </FadeInElement>
          <div className="section">
            <FadeInElement>
              <div className="section-title">
                <h2>Experience</h2>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div className="row">
                <div className="col">
                  <img
                    className="experience-image"
                    src={cupa}
                    alt="Cambridge University Press and Assessment"
                  />
                </div>
                <div className="col">
                  <h3>Technical Product Analyst</h3>
                  <h4>
                    Cambridge University Press &amp; Assessment
                    <span className="blue">Nov 2021 - Present</span>
                  </h4>
                  <p>
                    I left my PhD programme in 2021 after gaining a role as a
                    Technical Product Analyst at Cambridge University Press
                    &amp; Assessment. At the Press I predominantly work
                    alongside projects, ensuring our technical solutions
                    integrate with our exisiting capabilities / tech stack. I am
                    very excited to be working at a firm with such a rich
                    history, and a great mission &amp; ethos. Whilst here I hope
                    to further extend my project management capabilities and
                    gain valuable industry experience.
                  </p>
                </div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div className="separator">
                <div className="end-node"></div>
                <div className="line"></div>
                <div className="start-node"></div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div ref={fade} className="row">
                <div className="col">
                  <img
                    className="experience-image"
                    src={uea}
                    alt="University of East Anglia"
                  />
                </div>
                <div className="col">
                  <h3>PhD - Business and Management</h3>
                  <h4>
                    University of East Anglia
                    <span className="blue">Sep 2020 - Nov 2021</span>
                  </h4>
                  <p>
                    In 2020, I began studying toward a PhD in Business &amp;
                    Management at the University of East Anglia, with a focus on
                    the applicaiton of big data for performance management in
                    service organisations. Although I very much enjoyed my time
                    here, I left in 2021 after deciding to continue the pursuit
                    of a career in industry.
                  </p>
                </div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div className="separator">
                <div className="end-node"></div>
                <div className="line"></div>
                <div className="start-node"></div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div ref={fade} className="row">
                <div className="col">
                  <img
                    className="experience-image"
                    src={aviva}
                    alt="Aviva Plc"
                  />
                </div>
                <div className="col">
                  <h3>ProductWriter Developer</h3>
                  <h4>
                    Aviva
                    <span className="blue">Sep 2018 - Sep 2020</span>
                  </h4>
                  <p>
                    Upon finishing my Master’s degree I gained a position as a
                    developer at the insurance firm Aviva. The team I was part
                    of is responsible for Aviva’s commercial rating algorithms,
                    which manages both underwriting risk acceptance and the
                    pricing of insurance policies. Whilst there I learnt the
                    nuances of working within a global organisation, and gained
                    experience with large-scale unit and integration testing. I
                    left Aviva in September 2020 to pursue my PhD in Business
                    &amp; Management.
                  </p>
                </div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div className="separator">
                <div className="end-node"></div>
                <div className="line"></div>
                <div className="start-node"></div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div ref={fade} className="row">
                <div className="col">
                  <img
                    className="experience-image"
                    src={uea}
                    alt="University of East Anglia"
                  />
                </div>
                <div className="col">
                  <h3>MSc - Knowledge Discovery and Datamining</h3>
                  <h4>
                    University of East Anglia
                    <span className="blue">Sep 2017 - Sep 2018</span>
                  </h4>
                  <p>
                    When I graduated from my undergraduate studies I wanted to
                    learn more about the field of data science and so
                    subsequently enrolled on the MSc Knowledge Discovery and
                    Datamining course at the University of East Anglia. This
                    course allowed me to learn fundamental data science
                    principles and add further to my understanding of
                    information science. I graduated from this programme with
                    Merit.
                  </p>
                </div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div className="separator">
                <div className="end-node"></div>
                <div className="line"></div>
                <div className="start-node"></div>
              </div>
            </FadeInElement>
            <FadeInElement>
              <div ref={fade} className="row">
                <div className="col">
                  <img
                    className="experience-image"
                    src={uea}
                    alt="University of East Anglia"
                  />
                </div>
                <div className="col">
                  <h3>BSc - Business Information Systems</h3>
                  <h4>
                    University of East Anglia
                    <span className="blue">Sep 2014 - Jul 2017</span>
                  </h4>
                  <p>
                    My undergraduate course allowed me to pursue a degree that
                    combined my interests in consumer behaviour and computer
                    science. My studies gave me a comprehensive knowledge of
                    both business processes and software engineering principles;
                    of which there was a good mixture of theoretical and
                    practical elements. I graduated from this course in July
                    2017 with First Class Honours.
                  </p>
                </div>
              </div>
            </FadeInElement>
          </div>
        </>
      </Layout>
    </>
  )
}
export default Index
