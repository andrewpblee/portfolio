import React from "react"
import { Link } from "gatsby"
import arrowlight from "../../static/images/left-arrow-light.png"
import arrowdark from "../../static/images/left-arrow-dark.png"

const BackArrow = props => {
  return (
    <div>
      <Link to="/">
        <img
          className="backarrow arrow"
          src={`${props.togglestate === "dark" ? arrowlight : arrowdark}`}
          alt='back arrow'
        ></img>
      </Link>
    </div>
  )
}

export default BackArrow
