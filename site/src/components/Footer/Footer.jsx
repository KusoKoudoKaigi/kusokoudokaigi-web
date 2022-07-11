import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col} from "react-bootstrap"

const Footer = () => (
  <footer>
    <Container style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}>
      <Row>
        <Col>
          <Link to="/">
            <StaticImage src="../../images/icon.svg" alt="logo" style={{maxWidth:"80px"}}/>
          </Link>
          <p>クソコード・プログラミング<br/>大喜利コンテスト</p>
        </Col>
        <Col className="links">
          <h4>Links</h4>
          <ul>
            <li>
            <Link to="https://github.com/KusoKoudoKaigi"> Github </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/hashtag/kusokoudokaigi">Youtube</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <hr/>
    <p style={{textAlign:`center`}}>© 2021 KusoKoudoKaigi</p>
  </footer>
)

export default Footer