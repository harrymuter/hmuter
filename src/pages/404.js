import React from "react"
import Layout from "../components/layout"
import "../assets/css/404.css"
import john from "../assets/images/john.gif"

export default ({ data }) => {
  return (
    <Layout>
      <h1 className="page-title">Well this is awkward...</h1>
      <div className="section" style={{ textAlign: "center" }}>
        <h2 className="section-title" style={{ alignItems: "center" }}>
          404 error - page not found
        </h2>
        <p style={{ width: "100%", textAlign: "center" }}>
          It looks like you might be lost. Try another page.
        </p>
        <div className="fzf-image">
          <img src={john} alt="Lost John Travolta" />
        </div>
      </div>
    </Layout>
  )
}
