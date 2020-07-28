import React, { useState } from "react"

const mode = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "light"
  : "dark"

export const myContext = React.createContext({
  toggleState: mode,
  setToggleState: () => {},
})

const Provider = props => {
  const [toggleState, setToggleState] = useState(mode)
  console.log({ originalMode: mode })
  console.log({ toggleState: toggleState })
  return (
    <myContext.Provider
      value={{
        toggleState,
        changeToggleMode: () =>
          setToggleState(toggleState === "dark" ? "light" : "dark"),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}
export default ({ element }) => <Provider>{element}</Provider>
