import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faUserGraduate, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../assets/css/layout.css"
import "../assets/css/footer.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div class="outer-container">
        <main>{children}</main>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-col">
            © {new Date().getFullYear()} - Harry Muter
          </div>
          <div className="footer-col">
            <div className="footer-list icons">
              <a href="https://www.linkedin.com/in/harry-muter-675ab86b/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/harrymuter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/harrymuter">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://people.uea.ac.uk/h_muter">
                <FontAwesomeIcon icon={faUserGraduate} />
              </a>
            </div>
          </div>
          <div className="footer-col right icons">
            <a href="mailto:harry.muter95@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
