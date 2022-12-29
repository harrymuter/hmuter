import React, { useState, useRef, useEffect } from "react"
import "../assets/css/slider.css"

const Slider = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideMargin, setSlideMargin] = useState(0)
  const slideRef = useRef()

  useEffect(() => {
    slideRef.current
      ? setSlideMargin(slideRef.current.clientWidth * activeSlide * -1)
      : setSlideMargin(0)
  }, [activeSlide])

  const handleNext = () => {
    if (activeSlide === images.length - 1) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  const handlePrev = () => {
    if (activeSlide === 0) {
      setActiveSlide(images.length - 1)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }
  return (
    <div className="slider-container">
      <div className="slider-navigation-prev" onClick={() => handlePrev()}>
        <span className="slider-icon">&#10094;</span>
      </div>
      <div className="slider">
        <div
          className="slider-image-container"
          style={{
            marginLeft: slideMargin,
          }}
        >
          {images.map((image, index) => {
            return (
              <img
                ref={slideRef}
                key={index}
                src={image}
                className="slider-image"
              />
            )
          })}
        </div>
      </div>
      <div className="slider-navigation-next" onClick={() => handleNext()}>
        <span className="slider-icon">&#10095;</span>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <img
              onClick={() => setActiveSlide(index)}
              key={index}
              src={image}
              className={`thumbnail ${
                index === activeSlide ? " active-thumbnail" : ""
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
