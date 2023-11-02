import React, { useEffect, useState } from "react"
import { globalHistory } from "@reach/router"
import { useCookies } from "react-cookie"
import "../assets/css/navigation-menu.css"
import logo from "../assets/images/logostart.svg"
import NavigationItem from "./navigationItem"
import menuItems from "../data/menuItems.json"

const Navigation = () => {
  const pathname = globalHistory.location.pathname
  console.log(pathname)
  const [menuOpen, toggleMenu] = useState(false)
  const [cookies, setCookie] = useCookies(["loaded"])
  useEffect(() => {
    if (!cookies.loaded || (cookies.loaded && cookies.loaded === false)) {
      setTimeout(() => {
        setCookie("loaded", true)
      }, 300)
    }
  }, [cookies, setCookie])
  return (
    <div className="navbar">
      <div className="navigation-inner">
        <div className={`menu-branding${cookies.loaded ? "-loaded" : ""}`}>
          <a href="/">
            <img
              className={`navigation-logo`}
              src={logo}
              alt="Logo"
              aria-label="Logo"
            />
          </a>
        </div>

        <div className="menu-toggle">
          <div
            role="button"
            aria-label="Navigation Menu"
            tabIndex={0}
            onKeyDown={e =>
              e.code === "Enter" &&
              (menuOpen ? toggleMenu(false) : toggleMenu(true))
            }
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
            <NavigationItem
              key={index}
              pathname={pathname}
              item={item}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Navigation
