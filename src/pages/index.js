import React, { useState } from "react"
import Homepage from "../components/homepage"
import ModeToggle from "../components/modeToggle"

const Home = () => {
  const [togglestate, settogglestate] = useState("dark")

  const togglemode = () => {
    settogglestate(togglestate === "dark" ? "light" : "dark")
  }
  return (
    <div className={`main-wrapper-${togglestate}`}>
      <ModeToggle toggleMode={togglemode} togglestate={togglestate} />
      <Homepage togglestate={togglestate} />
    </div>
  )
}
export default Home
