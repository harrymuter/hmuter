import React from "react"
import SEO from "../components/seo"
import Navigation from "../components/navigation-menu"
import ReactGA from "react-ga"
ReactGA.initialize("G-6BMNFN0WSN")
ReactGA.pageview(window.location.pathname + window.location.search)

export default ({}) => {
  return (
    <div>
      <SEO />
      <Navigation />
    </div>
  )
}
