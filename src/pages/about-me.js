import React from "react"
import Layout from "../components/layout"
import NCFC from "../components/ncfc"
import Medics from "../components/medics"
import SyncTheCity from "../components/syncthecity"
import NT from "../components/nt"
import "../assets/css/about.css"

export default ({ data }) => {
  return (
    <Layout>
      <div className="section">
        <h1>About Me</h1>
        <h2>Background</h2>
        <p>
          I was born in East London, where I lived until my family relocated to
          Norwich in 2004. After moving to Norfolk, I was educated at Town Close
          House and then at Langley School, which is where my interest in
          technology and computing began. For my A-Levels I selected a wide
          range of subjects, studying Mathematics, Business Studies and
          Photography. After finishing school I enrolled to study Business
          Information Systems at the University of East Anglia (UEA) in 2014.
          <br />
          <br />
          I was drawn to my undergraduate course due to its interdisciplinary
          nature, as I wished to gain a rounded knowledge of fundamental
          business and computational theory, as well as learn practical software
          development skills. After graduating in 2017, with First Class
          Honours, I wanted to specialise in data science and subsequently
          enrolled on the MSc knowledge Discovery and Datamining course at UEA.
          During this course I learnt about applications of data science
          methods, such as Linear Regression, Clustering, ANNs and Descision
          Trees; familiarised myself with the R and Python programming
          languages; and also gained experience using SPSS.
          <br />
          <br />
          Upon graduating from UEA with Merit, I gained a role within the
          Commercial Underwriting Solutions Delivery department at Aviva. Whilst
          there, the team I worked in were responsible for the maintenance,
          development, and testing of the rating algorithm for Aviva's
          commercial products within the United Kingdom and Channel Islands.
          <br />
          <br />
          After two years of industry experience I wanted to move into research
          and academia so I applied for a doctoral studentship at UEA (within
          the Norwich Business School) gaining a role on their Graduate Teaching
          Assistant scheme. Although I very much enjoyed my time on this
          programme, I left in November 2021 after deciding to transition back
          into industry to pursue a career. I am currently working at{" "}
          <a href="https://www.cambridge.org/">
            Cambridge University Press &amp; Assessment
          </a>{" "}
          as a Technical Product Analyst.
        </p>
        <h2>Interests</h2>
        <p>
          Outside of work I enjoy both watching and participating in sports - I
          play for a local rugby team, will be{" "}
          <a href="https://www.justgiving.com/fundraising/HarryMuter">
            running the 2022 London Marathon
          </a>
          , and am a fan of Norwich City Football Club.
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
          In 2019 I got involved with the "Sync the City" event hosted by
          SyncNorwich. It was a very enjoyable experience and is something I
          would definitely recommend to anyone interested in tech or business.
          Unfortunatley Covid-19 meant that the 2020 event could not go ahead,
          however, I am looking forward to seeing the ideas pitched at the 2021
          instalment. I am also a member of the National Trust and spend most
          weekends visiting their sites.
        </p>
      </div>
    </Layout>
  )
}
