import React from "react"
import { Link } from "gatsby"
import arrowlight from "../../static/images/right-arrow-light.png"
import arrowdark from "../../static/images/right-arrow-dark.png"

const AboutArrow = props => {
  return (
    <div className={`${props.togglestate}`} id="about-arrow">
      <Link
        to="/about/"
        style={{
          textDecoration: "none",
          color: props.togglestate === "dark" ? "#2b2d42" : "#f8f7ff",
        }}
      >
        <h3>Learn more</h3>
        <img
          className="aboutarrow arrow"
          src={`${props.togglestate === "dark" ? arrowlight : arrowdark}`}
        ></img>
      </Link>
    </div>
  )
}

export default AboutArrow
