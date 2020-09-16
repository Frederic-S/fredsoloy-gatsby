import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the contact page</h1>
    <p>Contact page coming soon...</p>
    <Link style={{ textDecoration: "none" }} to="/">
      homepage
    </Link>
  </Layout>
)

export default SecondPage
