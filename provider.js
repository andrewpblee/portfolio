import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [toggleState, setToggleState] = useState("dark")
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
