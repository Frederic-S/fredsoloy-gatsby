import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.content}>
        <p>
          <Link to="/" className={headerStyles.logo}>
            <img className={headerStyles.logoSize} src={logo} alt="Logo" />
          </Link>
        </p>
        {/* <p>
          <Link to="/" className={headerStyles.brand}>
            Fred Soloy
          </Link>
        </p> */}
      </div>
    </header>
  )
}

export default Header
