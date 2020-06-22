import React from "react"
import { Link } from "gatsby"
export default function Header() {
  return (
    <div class="about">
      <Link to="/about/" style={{ textDecoration: "none", color: "#f8f7ff" }}>
        <h1>
          About<span>.</span>
        </h1>
      </Link>
    </div>
  )
}
