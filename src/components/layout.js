import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
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
      <div className="outer-container">
        <main>{children}</main>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-col">
            © {new Date().getFullYear()} - Harry Muter
          </div>
          <div className="footer-col">
            <div className="footer-list icons">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/muter/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a aria-label="Twitter" href="https://twitter.com/harrymuter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a aria-label="GitHub" href="https://github.com/harrymuter">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="footer-col right icons">
            <a
              aria-label="Email: harry.muter95@gmail.com"
              href="mailto:harry.muter95@gmail.com"
            >
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
