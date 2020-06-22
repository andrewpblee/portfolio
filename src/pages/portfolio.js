import React from "react"
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"

const Portfolio = () => {
  return (
    <myContext.Consumer>
      {context => (
        <div className={`main-wrapper-${context.toggleState}`}>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <div class={`pageTitle-${context.toggleState} pageTitle`}>
            <h1>
              Portfolio<span>.</span>
            </h1>
          </div>
        </div>
      )}
    </myContext.Consumer>
  )
}
export default Portfolio
