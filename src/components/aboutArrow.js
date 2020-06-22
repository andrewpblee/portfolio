import React from "react"
import { Link } from "gatsby"
import arrowlight from "../../static/images/right-arrow-light.png"
import arrowdark from "../../static/images/right-arrow-dark.png"

const AboutArrow = props => {
  return (
    <div className={`${props.togglestate}`}>
      <Link to="/about/" style={{ textDecoration: "none", color: "#2b2d42" }}>
        Learn more
        <img
          className="aboutarrow arrow"
          src={`${props.togglestate === "dark" ? arrowlight : arrowdark}`}
        ></img>
      </Link>
    </div>
  )
}

export default AboutArrow
