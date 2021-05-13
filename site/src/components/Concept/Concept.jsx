import * as React from "react"
import { Container, Row, Col, Tab } from "react-bootstrap"

const Concept = () => (
  <div id="concept">
    <Container>
      <h2>KusoKoudoKaigiが目指すもの</h2>
      <Row xs={1} lg={2}>
        <Col>
          <h3>
            道Kuso(笑)を楽しめ
          </h3>
          <h3>
            競わないし作らない<br/>第三のプログラミング
          </h3>
        </Col>
        <Col>
          <p>プログラミングと言えば、競技プログラミングやアプリ製作が有名です。</p>
          <p>しかし、それらの目的のあるプログラミングは大変です。</p>
          <p>そこで、私は第三のプログラミングとして、KusoCodingを広めたいと思っています。</p>
          <lu>
            <li>性能やコーディングの速度で<i>競わない</i></li>
            <li><i>生産性もクソくらえ</i></li>
          </lu>
          <p></p>
          <p><i>ただ、楽しんで学ぶために、KusoKoudoKaigiは存在します。</i></p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Concept