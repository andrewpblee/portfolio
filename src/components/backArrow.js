import React, { Component } from "react"
import { Link } from "gatsby"
import arrow from "../../static/images/left-arrow.png"
export default function BackArrow() {
  return (
    <div>
      <Link to="/">
        <img className="backarrow" src={arrow}></img>
      </Link>
    </div>
  )
}
