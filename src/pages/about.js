import React from "react"
import ModeToggle from "../components/modeToggle"
import BackArrow from "../components/backArrow"
import Logos from "../components/logos"
import { myContext } from "../../provider"

export default function About() {
  return (
    <myContext.Consumer>
      {context => (
        <div className={`main-wrapper-${context.toggleState}`}>
          <ModeToggle
            toggleMode={context.changeToggleMode}
            togglestate={context.toggleState}
          />
          <BackArrow />
          <div class="pageTitle">
            <h1>
              About<span>.</span>
            </h1>
          </div>
          <p className={`text ${context.togglestate}`} id={`aboutText`}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <Logos />
        </div>
      )}
    </myContext.Consumer>
  )
}
