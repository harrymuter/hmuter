import React, { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import ImageOfHarry from "../components/imageOfHarry"
import Aviva from "../components/aviva"
import UEA from "../components/uea"
import "../assets/css/app.css"
import "../assets/css/index.css"

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
    <Layout>
      <div ref={breakpoint}>
        <div className="photo-container">
          <ImageOfHarry />
        </div>
        <div className="info-container">
          <h1>Welcome</h1>
          <p>
            Hi there! My name is Harry Muter and I am a Postgraduate Researcher
            / PhD candidate at the Norwich Business School, located within the{" "}
            <a href="https://www.uea.ac.uk" target="_new">
              University of East Anglia
            </a>
            . The focus of my research is on the uses of{" "}
            <a href="https://en.wikipedia.org/wiki/Big_data">big data</a> for{" "}
            <a href="https://en.wikipedia.org/wiki/Performance_measurement">
              performance measurement
            </a>{" "}
            within{" "}
            <a href="https://en.wikipedia.org/wiki/Tertiary_sector_of_the_economy">
              service organisations
            </a>
            . My work sits within the{" "}
            <a
              href="https://www.uea.ac.uk/web/groups-and-centres/accounting-group"
              target="_new"
            >
              Accounting
            </a>{" "}
            and the{" "}
            <a
              href="https://www.uea.ac.uk/web/groups-and-centres/innovation-technology-and-operations-management-group"
              target="_new"
            >
              Information, Technology, and Operations Management (ITOM)
            </a>{" "}
            groups.
          </p>
          <p>
            On this website you will find information regarding my backgorund
            and experience, in addition to some of the projects I have been / am
            involved with. If you are interested in learning more about my
            research then please feel free to explore this site and get in
            touch!
          </p>
        </div>
        <div ref={sidebar} className="sidebar">
          <div class="sidebar-item">
            <a
              className="white"
              title="LinkedIn"
              href="https://www.linkedin.com/in/harry-muter-675ab86b/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div class="sidebar-item">
            <a
              className="white"
              title="Twitter"
              href="https://twitter.com/harrymuter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div class="sidebar-item">
            <a
              className="white"
              title="GitHub"
              href="https://github.com/harrymuter"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div class="sidebar-item">
            <a
              className="white"
              title="UEA Webpage"
              href="https://people.uea.ac.uk/h_muter"
            >
              <FontAwesomeIcon icon={faUserGraduate} />
            </a>
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
              <h4>2020 - Present</h4>
              <p className="line-separation">
                In 2020, I began studying toward a PhD in Business &amp;
                Management at the University of East Anglia, with a focus on the
                applicaiton of big data for performance management in service
                organisations. I was particularly drawn to this doctorate as it
                is part of a Graduate Teaching Assistant programme, which will
                allow me to develop my research and teaching skills,
                particularly within a Higher Education setting.
              </p>
              <h3>MSc - Knowledge Discovery and Datamining</h3>
              <h4>2017 - 2018</h4>
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
              <h4>2014 - 2017</h4>
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
        <div className="section">
          <div className="section-title">
            <h2>Employment</h2>
          </div>
          <div className="row">
            <div className="col">
              <Aviva />
            </div>
            <div className="col lg">
              <h3>ProductWriter Developer</h3>
              <h4>2018 - 2020</h4>
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
      </div>
    </Layout>
  )
}
