import * as React from "react"
import { Container } from "react-bootstrap"

const Title = ({title, subtitle, is_close}) => (
  <div id="title">
    <Container>
      <h1>{title}</h1>
      <h4>~ {subtitle} ~</h4>
      {is_close ? <h2 id="caution">第5回 KusoKoudoKaigi は終了いたしました。すべてのクソコードに感謝</h2>: ""}
    </Container>
  </div>
)

export default Title