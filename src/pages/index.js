import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        I'm Fred
        <br />
        Web Developer
      </p>
    </Layout>
  )
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to my new personal site.</p>
//     <p>Ready soon, progress...</p>
//     {testData.map((item, idx) => (
//       <ProgressBar
//         key={idx}
//         bgcolor={item.bgcolor}
//         completed={item.completed}
//       />
//     ))}
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link style={{ textDecoration: "none" }} to="/page-2/">
//       Contact page
//     </Link>{" "}
//     <br />
//   </Layout>
// )

export default Index
