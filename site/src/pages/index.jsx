import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

import Title from "../components/Title/Title"
import Concept from "../components/Concept/Concept"
import Join from "../components/Join/Join"
import Detail from "../components/Detail/Detail"
import Thanks from "../components/Thanks/Thanks"

const IndexPage = () => (
  <Layout>
    <Seo title="Hello!" />
    <Title/>
    <Concept/>
    <Join/>
    <Detail/>
    <Thanks/>
  </Layout>
)

export default IndexPage
