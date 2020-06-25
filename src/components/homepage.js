import React from "react"
import { Link } from "gatsby"
import Contact from "../components/contact"

const Homepage = props => {
  return (
    <div>
      <div className={`hi-im-andrew ${props.togglestate}`}>
        <h1>
          Hi<span>,</span>
        </h1>
        <h2>I'm Andrew</h2>
      </div>
      <p className={`text ${props.togglestate}`}>
        I'm an analyst looking to move into engineering. Here are some projects
        I've been working on.
      </p>
      <Link
        to="/portfolio/"
        style={{ textDecoration: "none", color: "#2b2d42" }}
      >
        <button className={`button-${props.togglestate}`}>Take a look</button>
      </Link>
      <Contact />
    </div>
  )
}
export default Homepage
