import React, { useState } from "react"

const mode = ""

export const myContext = React.createContext({
  toggleState: mode,
  setToggleState: () => {},
})

const Provider = props => {
  const [toggleState, setToggleState] = useState(mode)

  return (
    <myContext.Provider
      value={{
        toggleState,
        changeToggleMode: () => {
          setToggleState(toggleState === "dark" ? "" : "dark")
          console.log(toggleState)
          document.querySelector("html").classList.toggle("dark")
        },
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}
export default ({ element }) => <Provider>{element}</Provider>
