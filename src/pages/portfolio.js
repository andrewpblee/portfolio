import React from "react"
import { graphql } from 'gatsby'
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"
import BackArrow from "../components/backArrow"
import Project from "../components/project"


const Portfolio = ({
  data: {
    allMarkdownRemark: {
      edges
    },
  }
}) => {
  const projectsArr = edges.map(edge => (
    <Project
      key={edge.node.id}
      proj= {edge.node.frontmatter}
    />
  ))
  return (
    <myContext.Consumer>
      {context => (
        <div className={`main-wrapper-${context.toggleState}`}>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <div className="hp-wrapper">
            <BackArrow togglestate={context.toggleState} backward='/'/>
            <div className={`pageTitle-${context.toggleState} pageTitle`}>
              <h1 id='portfolio'>
                Portfolio<span>.</span>
              </h1>
            </div>
            <div className="projectList">{projectsArr}</div>
          </div>
        </div>
      )}
    </myContext.Consumer>
  )
}
export default Portfolio

export const pageQuery = graphql`
query {
  allMarkdownRemark {
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
