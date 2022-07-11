import * as React from "react"
import { Container } from "react-bootstrap"

const Title = ({title, subtitle}) => (
  <div id="title">
    <Container>
      <h1>{title}</h1>
      <h4>~ {subtitle} ~</h4>
    </Container>
  </div>
)

export default Title