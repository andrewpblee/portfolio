import React from "react"

const ModeToggle = props => {
  return (
    <div id="outerCircle" className={`${props.togglestate}`}>
      <div
        id={`innerCircle`}
        className={`${props.togglestate}`}
        onClick={props.toggleMode}
      />
    </div>
  )
}

export default ModeToggle
