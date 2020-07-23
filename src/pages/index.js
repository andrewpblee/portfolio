import React from "react"
import Homepage from "../components/homepage"
import ModeToggle from "../components/modeToggle"
import { myContext } from "../../provider"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <myContext.Consumer>
      {context => (
        <div className={`main-wrapper-${context.toggleState}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Andrew Lee | Portfolio</title>
            <link rel="canonical" href="https://andrewpblee.netlify.app" />
          </Helmet>
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
