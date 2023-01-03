import React from "react"
import Layout from "../components/layout"
import graduation from "../assets/images/graduation.jpeg"
import Spotify from "react-spotify-embed"
import marathon from "../assets/images/marathon.jpeg"
import marathonMedal from "../assets/images/marathon-medal.jpeg"
import quito from "../assets/images/quito.jpeg"
import halfMarathon from "../assets/images/half-marathon.jpeg"
import rugby from "../assets/images/rugby.jpeg"
import llama from "../assets/images/llama.jpeg"
import walking from "../assets/images/walking.jpg"
import pint from "../assets/images/pint.jpg"
import folley from "../assets/images/folley.jpeg"
import mudder from "../assets/images/mudder.jpeg"
import Slider from "../components/slider"
import "../assets/css/about.css"
import PremierLeague from "../components/PremierLeague"

const AboutMe = () => {
  return (
    <Layout>
      <h1 className="page-title">About Me</h1>
      <div className="section">
        <h2 className="section-title">Background</h2>
        <div className="about-section">
          <div className="about-item">
            <p>
              I was born in East London, but relocated to Norwich with my family
              in 2004, where I attended{" "}
              <a href="https://townclose.com/">Town Close School</a> and then{" "}
              <a href="https://langleyschool.co.uk/">Langley School</a>. For my
              A-Levels I selected a wide range of subjects, studying
              Mathematics, Business Studies and Photography. After finishing
              school I enrolled to study Business Information Systems at the{" "}
              <a href="https://www.uea.ac.uk/">
                University of East Anglia &#40;UEA&#41;
              </a>
              , beginning in September 2014.
            </p>
          </div>
          <div className="about-item">
            <p>
              I was drawn to my undergraduate course due to its
              interdisciplinary nature as I wished to gain a rounded knowledge
              of fundamental business principles, as well as practical software
              development skills. I graduated in July 2017, with First Class
              Honours before deciding to specialise in data science by enrolling
              on the{" "}
              <a href="https://www.uea.ac.uk/course/postgraduate/msc-data-science">
                MSc Knowledge Discovery and Datamining course
              </a>{" "}
              at UEA .
            </p>
          </div>
          <div className="about-item">
            <p>
              Upon graduating from my MSc with Merit, I gained a role at{" "}
              <a href="https://www.aviva.com/">Aviva</a>. Whilst there, I was
              responsible for the maintenance, development, and testing of the
              underwriting and pricing algorithms for Aviva's commercial
              products.
            </p>
          </div>
          <div className="about-item">
            <p>
              After two years of industry experience I wanted to move into
              research and academia so I applied for a{" "}
              <a href="https://www.uea.ac.uk/course/phd-doctorate/postgraduate-research-in-business-and-management">
                doctoral studentship at UEA &#40;within the Norwich Business
                School&#41;
              </a>{" "}
              gaining a role on their Graduate Teaching Assistant scheme.
              Although I enjoyed my time on this programme, I left in November
              2021 after deciding to transition back into industry to pursue a
              career. I am currently working at{" "}
              <a href="https://www.cambridge.org/">
                Cambridge University Press &amp; Assessment
              </a>{" "}
              as a Technical Product Analyst.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-item">
            <img
              className="graduation-photo"
              src={graduation}
              alt="Handsome young man at his graduation ceremony."
            />
            <span className="caption">My graduation ceremony, July 2017.</span>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Interests</h2>
        <div className="about-section">
          <p className="about-item">
            Outside of work I enjoy both watching and participating in sports -
            I play for a local rugby team, have run the 2022 London Marathon,
            and support Norwich City Football Club. I am also a member of the
            National Trust and spend most weekends visiting their sites.
          </p>
          <div className="about-item">
            <h4>A selection of pictures...</h4>
            <Slider
              images={[
                marathon,
                marathonMedal,
                quito,
                halfMarathon,
                pint,
                rugby,
                folley,
                mudder,
                llama,
                walking,
              ]}
            />
          </div>
          {/* <div className="about-item">
            <PremierLeague />
          </div> */}
        </div>
        <div className="about-section">
          <div className="about-item">
            <h4>What I'm listening to...</h4>
            <Spotify link="https://open.spotify.com/playlist/57G3nkGhlEeoYn7nuI78gc?si=640d5369c468448f" />
          </div>
          <div className="about-item">
            <h4>Where I'm runnning...</h4>
            <iframe
              height="454"
              width="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
              src="https://www.strava.com/athletes/49208008/latest-rides/a97d5a68d609a2ec5edcbb99a58a1108c9fadf1c"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
