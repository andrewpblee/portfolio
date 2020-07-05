import React from "react"
import { Link } from 'gatsby'

const Project = p => {
  return (
    <div className="project">
      <h2 className="projectName">
        <Link to ={p.proj.slug}>{p.proj.title}</Link>
      </h2>
      <p className="bio">{p.proj.bio}</p>
      <p className="languages">{p.proj.languages}</p>
    </div>
  )
}
export default Project
