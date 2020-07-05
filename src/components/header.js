import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header">
    <div class="container" id="header">
      <div id="logo" class="pull-left">
        <h1>
          <Link to="#intro" class="scrollto">
            COrelhas
          </Link>
        </h1>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active">
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#features">Services</a>
          </li>
          <li>
            <a href="#advanced-features">Portfolio</a>
          </li>
          <li>
            <a href="#team">About</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
