import React from 'react'
import { graphql } from 'gatsby'


const Template = ({
    data,
}) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <React.Fragment>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.languages}</h2>
        <p>{frontmatter.bio}</p>
        <div dangerouslySetInnerHTML={{__html: html}} /> 
        </React.Fragment>
    )
}

export default Template
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: {eq: $slug }}) {
            html
            frontmatter {
                title
                languages
                bio
            }
        }
    }
`