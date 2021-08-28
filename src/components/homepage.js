import React from "react"
import { Link } from "gatsby"

const Homepage = props => {
  return (
    <>
      <div className={`homepage-hp-wrapper ${props.togglestate}`}>
        <h1>
          Hi<span>,</span> I'm Andrew.
        </h1>
        <h2></h2>
        <p>
          I work with data. Here are some
          projects I've been working on.
        </p>
        <Link
          to="/portfolio/"
          style={{ textDecoration: "none", color: "#2b2d42" }}
        >
          <h2>portfolio.</h2>
        </Link>
      </div>
    </>
  )
}
export default Homepage
