import React, { useState } from "react"
import { graphql } from "gatsby"
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"
import BackArrow from "../components/backArrow"
import Icon from "../components/IconFooter"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <myContext.Consumer>
      {context => (
        <div className={`mw`}>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <BackArrow togglestate={context.toggleState} backward="/portfolio" />
          <div
            className={`blog ${context.toggleState}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Icon repo={frontmatter.repo} />
        </div>
      )}
    </myContext.Consumer>
  )
}

export default Template
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        languages
        bio
        repo
      }
    }
  }
`
