import React, { useState, useRef } from "react"
const NavigationItem = ({ pathname, item, toggleMenu }) => {
  const [subItems, toggleSubItems] = useState(false)
  const navItem = useRef()
  return (
    <>
      {item.url !== "" ? (
        <a
          ref={navItem}
          className={`nav-link${pathname === item.url ? " active" : ""}`}
          href={item.subitems ? "#" : item.url}
          onClick={() => {
            toggleSubItems(!subItems)
          }}
        >
          {item.name}
          {item.subItems && (
            <>
              <span class={`chevron${subItems ? " bottom" : " right"}`}></span>
              {subItems && (
                <div
                  className="dropdown-content"
                  style={{ top: navItem.current.clientHeight + 20 }}
                >
                  {item.subItems.map((subItem, index) => (
                    <div key={index} className="sub-item">
                      <a
                        className={`nav-link${
                          pathname === subItem.url ? " active" : ""
                        }`}
                        exact={"true"}
                        href={subItem.url}
                        onClick={() => {
                          toggleMenu(false)
                          toggleSubItems(null)
                        }}
                      >
                        {subItem.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </a>
      ) : (
        <a className="nav-link" href={item.url2}>
          {item.name}
        </a>
      )}
    </>
  )
}

export default NavigationItem
