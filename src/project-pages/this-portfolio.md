---
slug: "/projects/my-portfolio"
title: "Portfolio"
languages: "js, react, graphql"
bio: "Behind the scenes of this portfolio!"
repo: "https://github.com/andrewpblee/portfolio"
date: "2020-07-07"
---

#Portfolio Project<span>.</span>

This portfolio has been a great project, and I hope to continually add to it as I develop more projects.

I choose to use Gatsby as my framework as I could continue to advance my understanding of react, whilst also giving me a chance to use graphql for the backend data.

I tried to approach this as an end-to-end project, I first spent a couple weeks using Framer to construct a prototype and fully understand the UX and design on both desktop and mobile. This meant that I could understand the scope of the project and build the mvp within a short period of time.

One of the main challenges I had was how to carry the state light/dark mode toggle across pages. Passing the state to a child component can be acheived quite easily using `props`, but moving to a sibling page proved challenging as there was no obvious parent component to handle the state management.

After some stack overflowing I came across the idea of creating a `provider` file to use as a wrapper element which could handle state management, which is then imported into `gatsby-browser.js` to make the component accessible to all pages.

Within `provider` I used `React.createContext` to manage the state of the togglestate, as this could then be utilised across the two pages as one state, without needing to pass props down manually.

Next, I created markdown files for each project, and programmatically create pages for each using `gatsby-source-filesystem` to make this accessible to graphql. With the help of gatsby's great tutorials I create a list on the portfolio in date order, with my newer projects first. This means that as I add more projects, I can simply create a new markdown file, detailing the key info about the project to be displayed on the portfolio list and the description for the page itself.

I'd love to add more to this portfolio and show off my skillset, one of the key areas would be to add a subtle animation to the background of the homepage to add a bit of movement.
