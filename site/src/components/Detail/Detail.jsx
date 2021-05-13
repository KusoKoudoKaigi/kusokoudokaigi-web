import * as React from "react"
import { Link } from "gatsby"
import { Table, Container, Row, Col } from "react-bootstrap"

import JSONData from "../../content/detail.json"

const PastOverview = () => (
  <Table>
    <tbody>
    {JSONData.past_overviews.map((data, index) => {
      return <tr key={`past_overview_${index}`}>
        <td>KusoKoudoKaigi{data.num}</td>
        <td>{data.date}</td>
        <td><Link href={data.live_url}>Go to Live</Link></td>
        <td><Link href={data.overview}>Result</Link></td>
      </tr>
    })}
    </tbody>
  </Table>
)

const Detail = () => (
  <div id="detail">
    <Container>
      <h2>KusoKoudoKaigiについて知る</h2>
      <Row>
        <h3>これまでのKusoKoudoKaigi</h3>
        <PastOverview/>
      </Row>
    </Container>
  </div>
)

export default Detail