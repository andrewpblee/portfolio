import React from "react"
import Project from "./project"
import projects from "../data/projects.json"

const ProjectList = () => {
  const projectsArr = projects.map(proj => (
    <Project
      projectName={proj.name}
      language={proj.languages.join(", ")}
      bio={proj.bio}
      src={proj.src}
    />
  ))
  return <div className="projectList">{projectsArr}</div>
}
export default ProjectList
