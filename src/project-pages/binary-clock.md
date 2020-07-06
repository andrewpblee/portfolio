---
slug: "/projects/binary-clock"
title: "Binary Clock"
languages: "js"
bio: "Telling the time using binary"
---

#Binary Clock<span>.</span>

The Binary Clock is a really interesting way to tell the time. From bottom to top of each column, the buttons represent 1,2,4 and 8, and the time is the sum of all "on" buttons.

<iframe height="450px" style="width: 100%;" scrolling="no" title="Binary Clock" src="https://codepen.io/andrewpblee/embed/preview/EJgmQP?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andrewpblee/pen/EJgmQP'>Binary Clock</a> by andrewpblee
  (<a href='https://codepen.io/andrewpblee'>@andrewpblee</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This was a quick, fun project to test my understanding of a few ES2015 features, such as arrow functions, template literals and the spread operator.

There's a lot of repetition in the code. I get the current time, then map over each digit, within which I map over each column and light the dot if the digit is in a certain list, depending on which binary value the dot represents.

For a start, I could clean the code by creating a function to calculate the background colour, then loop through the columns and dots.
