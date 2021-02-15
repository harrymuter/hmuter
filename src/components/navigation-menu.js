import React, { useState } from "react"
import "../assets/css/navigation-menu.css"
import menuItems from "../data/menuItems.json"
import { Link } from "gatsby"

export default () => {
  const [menuOpen, toggleMenu] = useState(false)
  const [subItem, toggleSubItem] = useState(null)
  return (
    <div className="navbar">
      <div className="navigation-inner">
        <div className="menu-branding">
          <Link to="/">
            <div className="navigation-logo">Harry Muter</div>
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

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${subItem === index ? "active" : ""} `}
            >
              {item.url !== "" ? (
                <Link
                  className="nav-link"
                  activeClassName="nav-link active"
                  exact={true}
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
                        exact={true}
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
