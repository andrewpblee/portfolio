import React from "react"

const Project = props => {
  return (
    <div className="project">
      <h2 className="projectName">{props.projectName}</h2>
      <p className="languages">{props.language}</p>
      <p className="bio">{props.bio}</p>
    </div>
  )
}
export default Project
