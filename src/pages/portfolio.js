import React from "react"
import { graphql } from "gatsby"
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"
import { Helmet } from "react-helmet"
import BackArrow from "../components/backArrow"
import Project from "../components/project"

const Portfolio = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const projectsArr = edges.map(edge => (
    <Project key={edge.node.id} proj={edge.node.frontmatter} />
  ))
  return (
    <myContext.Consumer>
      {context => (
        <div className={`mw ${context.toggleState}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Andrew Lee | Projects</title>
            <link rel="canonical" href="https://andrewpblee.netlify.app" />
          </Helmet>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <BackArrow togglestate={context.toggleState} backward="/" />
          <h1 id="portfolio">
            portfolio<span>.</span>
          </h1>
          <div className="projectList">{projectsArr}</div>
        </div>
      )}
    </myContext.Consumer>
  )
}
export default Portfolio

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            bio
            languages
            slug
            title
          }
        }
      }
    }
  }
`
