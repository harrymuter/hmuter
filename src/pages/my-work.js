import React from "react"
import Layout from "../components/layout"
import Diss from "../components/dissertation"
import essay from "../assets/docs/ethicsOfDataMining.pdf"
import dissertation from "../assets/docs/dissertation.pdf"
import "../assets/css/work.css"

export default ({ data }) => {
  return (
    <Layout>
      <h1>My Work</h1>
      <h2>Academic Portfolio</h2>
      <p>
        Please find below a few examples of the academic work I have completed
        during my postgraduate studies whilst at the University of East Anglia.
        I will continue to add pieces as and when I complete them, so make sure
        to check back in the future for more work! If you have any questions
        then don't hesitate to{" "}
        <a href="mailto:h.muter@uea.ac.uk">get in touch.</a>
      </p>
      <div className="academic">
        <div className="academic-image">
          <Diss />
        </div>
        <div className="content">
          <div className="accordion">
            <div class="accordion-header">Master's</div>
            <div className="accordion-body">
              <p>
                <a href={essay}>Data Mining Ethics Essay</a>
              </p>
              <p>
                <a href={dissertation}>MSc Dissertation</a>
              </p>
            </div>
          </div>
          <div className="accordion">
            <div class="accordion-header">Doctoral</div>
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
      <h2>Professional Portfolio</h2>
      <p>
        In addition to my academic work, please find some professional projects
        that I have worked on through a business I co-founded, called Epic
        Applications. We build web applications for local businesses using{" "}
        <a href="https://reactjs.org/">ReactJS</a> and Wordpress. Again, if you
        would like to know more about the work on this website then{" "}
        <a href="mailto:h.muter@uea.ac.uk">get in contact</a>.
      </p>
      <div className="content">
        <div className="accordion">
          <div class="accordion-header">Epic Applications</div>
          <div className="accordion-body">
            <p>
              <a href="https://www.epicdev.co.uk">Epic Dev</a>
            </p>
            <p>
              <a href="https://www.bbisheating.co.uk/">BBIS Heating</a>
            </p>
            <p>
              <a href="https://www.sicilyvan.co.uk/">Sicily Trattoria</a>
            </p>
            <p>
              <a href="https://www.joeyandpals.co.uk/">Joey and Pals</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
