import React from "react"
import Layout from "../components/layout"
import "../assets/css/404.css"
import john from "../assets/images/john.gif"

export default ({ data }) => {
  return (
    <Layout>
      <h1>404 error - page not found</h1>
      <div className="fzf-subheading">
        <p>It looks like you might be lost. Try another page.</p>
      </div>
      <div className="fzf-image">
        <img src={john} alt="Lost John Travolta" />
      </div>
    </Layout>
  )
}
