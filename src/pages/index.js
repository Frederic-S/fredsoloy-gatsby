import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/bar"

const testData = [{ bgcolor: "#6a1b9a", completed: 25 }]

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        Rebuiding my personal site,
        <br />
        with GatsbyJS
      </p>
      <p>Ready soon, in progress...</p>

      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
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
