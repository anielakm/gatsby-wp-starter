import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (

    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>


      <Link to="/blog/">Got to blog page</Link> <br />

    </Layout>

  )
}

export default IndexPage
