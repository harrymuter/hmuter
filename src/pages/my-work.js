import React from "react"
import Layout from "../components/layout"
import "../assets/css/work.css"
import ed from "../assets/images/EpicDev.png"
import sm from "../assets/images/SM.svg"
import bbis from "../assets/images/BBIS.png"

const dissertation =
  "https://harrymuter.s3.eu-west-2.amazonaws.com/dissertation.pdf"
const essay =
  "https://harrymuter.s3.eu-west-2.amazonaws.com/ethicsOfDataMining.pdf"

export default ({ data }) => {
  return (
    <Layout>
      <h1 className="page-title">My Work</h1>
      <div className="section">
        <div className="section-title">
          <h2>Professional Portfolio</h2>
        </div>
        <p className="professional-text">
          Please find a few examples of the professional projects that I have
          worked on through a business I co-founded, called Epic Applications.
          We build web applications for local businesses using{" "}
          <a href="https://reactjs.org/">ReactJS</a> and the Gatsby site
          generator. If you would like to know more about this work then feel
          free to{" "}
          <a href="mailto:harry.muter95@gmail.com">get in contact with me</a> or
          reach out via LinkedIn / Twitter. If you are looking to build your own
          website and would like to discuss how we might be able to assist you,
          don't hesitate to contact{" "}
          <a href="https://www.epicdev.co.uk/contact">Epic Dev</a>.
        </p>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <a href="https://www.epicdev.co.uk">
              <img className="portfolio-icon" src={ed} alt="Epic Development" />
            </a>
          </div>
          <div className="portfolio-box">
            <a href="https://www.bbisheating.co.uk/">
              <img className="portfolio-icon" src={bbis} alt="BBIS Heating" />
            </a>
          </div>
          <div className="portfolio-box">
            <a href="https://www.sicilyvan.co.uk/">
              <img className="portfolio-icon" src={sm} alt="Sicily Trattoria" />
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">
          <h2>Academic Portfolio</h2>
        </div>
        <p className="professional-text">
          In addition to my professional work, please find some of the academic
          work I completed during my postgraduate studies whilst at the
          University of East Anglia. The first paper is a review article
          concerning the ethics of data science which was written as an
          assessment piece for one of my Master's modules; and the second is a
          comprehensive report I compiled for my Master's dissertation, for the
          University of East Anglia, that outlines the steps I would take to
          improve one of their existing systems.
        </p>
        {/* <div className="academic"> */}
        <div className="portfolio-container">
          <div className="portfolio-box">
            <a href={essay}>Data Mining Ethics Essay</a>
          </div>
          <div className="portfolio-box">
            <a href={dissertation}>MSc Dissertation</a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  )
}
