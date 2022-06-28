import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import Navigation from "../components/navigation-menu"

export default ({}) => {
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {
    setFirstRender(false)
  }, [])
  return (
    <div>
      <SEO />
      <Navigation firstRender={firstRender} />
    </div>
  )
}
