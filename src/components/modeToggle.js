import React from "react"
import lightmode from "../../static/images/lightmode.png"
import darkmode from "../../static/images/darkmode.png"

const ModeToggle = props => {
  const classNames = `modeToggle ${props.togglestate}`
  return (
    <img
      className={classNames}
      src={props.togglestate === "dark" ? darkmode : lightmode}
      onClick={props.toggleMode}
      alt= {props.togglestate}
    ></img>
  )
}

export default ModeToggle
