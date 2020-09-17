import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the contact page</h1>
    <p>Contact page coming soon...</p>
    <button className="text-blue-600 hover:text-red-600 ...">Button</button>
    <br />
    <Link style={{ textDecoration: "none" }} to="/">
      homepage
    </Link>
  </Layout>
)

export default SecondPage
