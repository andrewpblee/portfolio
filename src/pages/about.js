import React from "react"
import Header from "../components/header"
import BackArrow from "../components/backArrow"
import Logos from "../components/logos"

export default function About() {
  return (
    <div>
      <BackArrow />
      <div class="pageTitle">
        <h1>
          About<span>.</span>
        </h1>
      </div>
      <p class="text" id="aboutText">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
      <Logos />
    </div>
  )
}
