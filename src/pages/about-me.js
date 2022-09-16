import React from "react"
import Layout from "../components/layout"
import NCFC from "../components/ncfc"
import Medics from "../components/medics"
import graduation from "../assets/images/graduation.jpeg"
import "../assets/css/about.css"

export default ({ data }) => {
  return (
    <Layout>
      <h1 className="page-title">About Me</h1>
      <div className="section">
        <h2 className="section-title">Background</h2>
        <div className="about-section">
          <p className="about-item">
            I was born in East London, but relocated to Norwich with my family
            in 2004. After moving to Norfolk, I attended Town Close House and
            then at Langley School, which is where my interest in technology and
            computing began. For my A-Levels I selected a wide range of
            subjects, studying Mathematics, Business Studies and Photography.
            After finishing at school I enrolled to study Business Information
            Systems at the University of East Anglia (UEA) in 2014.
          </p>
          <div className="about-item">
            <img
              className="graduation-photo"
              src={graduation}
              alt="Handsome young man at his graduation ceremony."
            />
          </div>
          <p className="about-item">
            I was drawn to my undergraduate course due to its interdisciplinary
            nature, as I wished to gain a rounded knowledge of fundamental
            business and computer science theory, as well as learn practical
            software development skills. After graduating in 2017, with First
            Class Honours, I wanted to specialise in data science and
            subsequently enrolled on the MSc knowledge Discovery and Datamining
            course at UEA. During this course I learnt about applications of
            data science methods, such as Linear Regression, Clustering, ANNs
            and Descision Trees; familiarised myself with the R and Python
            programming languages; and also gained experience using SPSS.
          </p>
          <p className="about-item">
            Upon graduating from UEA with Merit, I gained a role within the
            Commercial Underwriting Solutions Delivery department at Aviva.
            Whilst there, the team I worked in were responsible for the
            maintenance, development, and testing of the rating algorithm for
            Aviva's commercial products within the United Kingdom and Channel
            Islands.
          </p>
          <p className="about-item">
            After two years of industry experience I wanted to move into
            research and academia so I applied for a doctoral studentship at UEA
            (within the Norwich Business School) gaining a role on their
            Graduate Teaching Assistant scheme. Although I very much enjoyed my
            time on this programme, I left in November 2021 after deciding to
            transition back into industry to pursue a career. I am currently
            working at{" "}
            <a href="https://www.cambridge.org/">
              Cambridge University Press &amp; Assessment
            </a>{" "}
            as a Technical Product Analyst.
          </p>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Interests</h2>
        <p className="interest-text">
          Outside of work I enjoy both watching and participating in sports - I
          play for a local rugby team, will be running the 2022 London Marathon,
          and am a fan of Norwich City Football Club. In 2019 I got involved
          with the "Sync the City" event hosted by SyncNorwich. It was a very
          enjoyable experience and is something I would definitely recommend to
          anyone interested in tech or business. Unfortunatley Covid-19 meant
          that the 2020 event could not go ahead, however, I am looking forward
          to seeing the ideas pitched at the 2021 instalment. I am also a member
          of the National Trust and spend most weekends visiting their sites.
        </p>

        <div className="interests">
          <div className="interest">
            <Medics />
          </div>
          <div className="interest">
            <a href="https://www.canaries.co.uk/">
              <NCFC />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
