import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import ContestJSON from "../../content/contest.json"

const JoinButton = ({ url, children }) => {
  if(url) {
    return <Button href={url}>{children}</Button>
  }else {
    return <Button variant="secondary">comming soon...</Button>
  }
}

JoinButton.propTypes = {
  url: PropTypes.string,
}

const Join = () => (
  <div id="join">
    <Container>
      <h2>KusoKoudoKaigiに参加する</h2>
      <Row>
        <div className="next-submit">
          <h3>クソコードを書いて参戦する</h3>
          <p>
            必要なものはありません。
            以下のリンクから開催概要をチェックして、
            最新のKusoKoudoKaigiにコードを提出しましょう。
          </p>
          <JoinButton url={ContestJSON.latest.code_submit_form_url}>
            参戦!!
          </JoinButton>
        </div>
      </Row>
      <Row xs={1} lg={2}>
        <Col className="next-judge">
          <h3>クソコードを審査する</h3>
          <p>
            クソコードを愛していますか？
            KusoKoudoKaigiでは、クソコードにコメントをしてくださる審査員を募集しています。
          </p>
          <JoinButton url={ContestJSON.latest.judge_url}>
            審査する!!
          </JoinButton>        </Col>
        <Col className="commit">
          <h3>GitHubで貢献する</h3>
          <Button href="https://github.com/KusoKoudoKaigi/KusoKoudoKaigi">リポジトリへ</Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Join