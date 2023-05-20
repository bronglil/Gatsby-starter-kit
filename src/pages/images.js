import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Images = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
