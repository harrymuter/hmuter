import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import ImageOfHarry from "../components/imageOfHarry"
import Aviva from "../components/aviva"
import UEA from "../components/uea"
import CUP from "../components/cup"
import "../assets/css/app.css"
import "../assets/css/index.css"

export default () => {
  const welcomeMessages = ["Welcome", "Bienvenue", "Willkommen", "Bienvenido"]
  const [selectedMessage, setSelectedMessage] = useState(0)
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome")
  const breakpoint = useRef()
  const sidebar = useRef()

  setTimeout(() => {
    if (selectedMessage === 3) {
      setSelectedMessage(0)
      setWelcomeMessage(welcomeMessages[selectedMessage])
    } else {
      setSelectedMessage(selectedMessage + 1)
      setWelcomeMessage(welcomeMessages[selectedMessage])
    }
  }, 3000)

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
    <Layout>
      <div ref={breakpoint}>
        <div className="welcome">
          <h1>{welcomeMessage}!</h1>
        </div>
        <div className="photo-container">
          <ImageOfHarry />
        </div>
        <div className="info-container">
          <p>
            On this website you will find information regarding my background
            and experience, in addition to some of the projects I have been / am
            involved with. If you are interested in learning more then please
            feel free to explore this site and get in touch!
          </p>
          <Link to="/marathon">
            <a className="button">
              I'm running the 2022 London Marathon
              <br /> Please Click Here to Donate
            </a>
          </Link>
        </div>
        <div ref={sidebar} className="sidebar">
          <div className="sidebar-item">
            <a
              className="white"
              title="LinkedIn"
              href="https://www.linkedin.com/in/harry-muter-675ab86b/"
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
                Assessment. At the press I predominantly work alongside
                projects, ensuring out technical solutions integrate with our
                exisiting capabilities / tech stack. I am very excited to be
                working at a firm with such a rich history and a great mission
                and ethos. Whilst here I hope to further extend my project
                management capabilities and gain valuable industry experience.
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
                developer at the insurance firm Aviva. The team I was part of is
                responsible for Aviva’s commercial rating algorithms, which
                manages both underwriting risk acceptance and the pricing of
                insurance policies. Whilst there I learnt the nuances of working
                within a global organisation, and gained experience with
                large-scale unit and integration testing. I left Aviva in
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
              <p className="line-separation">
                In 2020, I began studying toward a PhD in Business &amp;
                Management at the University of East Anglia, with a focus on the
                applicaiton of big data for performance management in service
                organisations. Although I very much enjoyed my time here, I left
                in 2021 after deciding to continue the pursuit of a career in
                industry.
              </p>
              <h3>MSc - Knowledge Discovery and Datamining</h3>
              <h4>
                University of East Anglia
                <span className="blue">2017 - 2018</span>
              </h4>
              <p className="line-separation">
                When I graduated from my undergraduate studies I wanted to learn
                more about the field of data science and so subsequently
                enrolled on the MSc Knowledge Discovery and Datamining course at
                the University of East Anglia. This course allowed me to learn
                fundamental data science principles and add further to my
                understanding of information science. I graduated from this
                programme with Merit.
              </p>
              <h3>BSc - Business Information Systems</h3>
              <h4>
                University of East Anglia
                <span className="blue">2014 - 2017</span>
              </h4>
              <p>
                My undergraduate course allowed me to pursue a degree that
                combined my interests in consumer behaviour and computer
                science. My studies gave me a comprehensive knowledge of both
                business processes and software engineering principles; of which
                there was a good mixture of theoretical and practical elements.
                I graduated from this course in July 2017 with First Class
                Honours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
