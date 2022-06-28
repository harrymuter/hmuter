import React, { useState } from "react"
import "../assets/css/navigation-menu.css"
import "../assets/css/characters.css"
import menuItems from "../data/menuItems.json"
import { Link } from "gatsby"

export default ({ firstRender }) => {
  const [active1, setActive1] = useState(firstRender)
  const [active2, setActive2] = useState(firstRender)
  const [active3, setActive3] = useState(firstRender)
  const [active4, setActive4] = useState(firstRender)
  const [active5, setActive5] = useState(firstRender)
  const [active6, setActive6] = useState(firstRender)
  const [active7, setActive7] = useState(firstRender)
  const [active8, setActive8] = useState(firstRender)
  const [active9, setActive9] = useState(firstRender)
  const [active10, setActive10] = useState(firstRender)
  const [active11, setActive11] = useState(firstRender)
  const [menuOpen, toggleMenu] = useState(false)
  const [subItem, toggleSubItem] = useState(null)
  setTimeout(() => {
    setActive1(true)
  }, 300)
  setTimeout(() => {
    setActive2(true)
  }, 600)
  setTimeout(() => {
    setActive3(true)
  }, 900)
  setTimeout(() => {
    setActive4(true)
  }, 1200)
  setTimeout(() => {
    setActive5(true)
  }, 1500)
  setTimeout(() => {
    setActive6(true)
  }, 1500)
  setTimeout(() => {
    setActive7(true)
  }, 2100)
  setTimeout(() => {
    setActive8(true)
  }, 2400)
  setTimeout(() => {
    setActive9(true)
  }, 2700)
  setTimeout(() => {
    setActive10(true)
  }, 3000)
  setTimeout(() => {
    setActive11(true)
  }, 3300)
  return (
    <div className="navbar">
      <div className="navigation-inner">
        <div className={`menu-branding${active11 ? " active" : ""}`}>
          <Link to="/">
            <div className={`navigation-logo`}>
              <span className={`character${active1 ? " active" : ""}`}>H</span>
              <span className={`character${active2 ? " active" : ""}`}>a</span>
              <span className={`character${active3 ? " active" : ""}`}>r</span>
              <span className={`character${active4 ? " active" : ""}`}>r</span>
              <span className={`character${active5 ? " active" : ""}`}>y</span>
              <span className={`character${active6 ? " active" : ""}`}> </span>
              <span className={`character${active7 ? " active" : ""}`}>M</span>
              <span className={`character${active8 ? " active" : ""}`}>u</span>
              <span className={`character${active9 ? " active" : ""}`}>t</span>
              <span className={`character${active10 ? " active" : ""}`}>e</span>
              <span className={`character${active11 ? " active" : ""}`}>r</span>
            </div>
          </Link>
        </div>

        <div className="menu-toggle">
          <div
            role="button"
            // tabIndex={0}
            onKeyDown={() => (menuOpen ? toggleMenu(false) : toggleMenu(true))}
            onClick={() => (menuOpen ? toggleMenu(false) : toggleMenu(true))}
            className={`animated-icon1 ${menuOpen ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-items${menuOpen ? " open" : ""}`}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${subItem === index ? "active" : ""} `}
            >
              {item.url !== "" ? (
                <Link
                  className="nav-link"
                  activeClassName="nav-link active"
                  exact={"true"}
                  to={item.subitems ? "#" : item.url}
                  onClick={() => {
                    subItem === index
                      ? toggleSubItem(null)
                      : toggleSubItem(index)
                    item.subitems ? toggleMenu(true) : toggleMenu(false)
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a className="nav-link" href={item.url2}>
                  {item.name}
                </a>
              )}
              {item.subitems && (
                <div
                  className={`dropdown-content${
                    subItem === index ? " show" : ""
                  }`}
                >
                  {item.subitems.map((subitem, index) => (
                    <div key={index} className="sub-item">
                      <Link
                        activeClassName="nav-link active"
                        exact={"true"}
                        to={subitem.url}
                        onClick={() => {
                          toggleMenu(false)
                          toggleSubItem(null)
                        }}
                        className={`nav-link ${
                          subitem.class ? subitem.class : ""
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
