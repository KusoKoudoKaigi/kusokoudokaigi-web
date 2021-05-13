import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <Container>
      <Link to="/">
        <StaticImage src="../../images/icon.svg" alt="logo" style={{maxWidth:"80px"}}/>
      </Link>
    </Container>
  </header>
)

export default Header
