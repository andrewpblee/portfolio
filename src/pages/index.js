import React from "react"
import Homepage from "../components/homepage"
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"

const Home = () => {
  return (
    <myContext.Consumer>
      {context => (
        <div className={`main-wrapper-${context.toggleState}`}>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <Homepage togglestate={context.toggleState} />
        </div>
      )}
    </myContext.Consumer>
  )
}
export default Home
