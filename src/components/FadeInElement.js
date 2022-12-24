import React, { useState, useEffect, useRef } from "react"

const FadeInElement = ({ children }) => {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(entries[0])
        setVisible(true)
        observer.unobserve(domRef.current)
      }
    })
    observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`hidden-element${isVisible ? " is-visible" : ""}`}
    >
      {children}
    </div>
  )
}

export default FadeInElement
