---
slug: "/projects/cocktails-part-one"
title: "Cocktails Project (Part One)"
languages: "js, puppeteer"
bio: "A web scraping project to gather cocktail information from wikipedia"
repo: "https://github.com/andrewpblee/cocktails"
date: "2020-07-17"
---

#Cocktails Project (Part One)<span>.</span>

I wanted to create a site using official IBA cocktail recipes, where a user could filter by name and ingredient.

The first part of the project was to scrape wikipedia for the details of each cocktail within the IBA list. Normally I would use python and BeautifulSoup to scrape a site, but I wanted to test my knowledge of promises and so used puppeteer instead.

Using puppeteer I scraped wikipedia to collect an array of cocktail urls for each cocktail catgeory, then for each url I gathered relevant data from the table at the top into an object. From there I cleaned the data to create lists instead of strings and strip out any cocktails without key information.

A lot of the functions were messier than I would put into production, but as these will likely not be automated or used without supervision, I felt this was fine. Each category required tweaking the scraping functions anyway, and is all dependent on the page structure, which could change in the future.

To get the async functions to work I used IIFE and then logged the resulting arrays to the console, where I could move them into new files easily.
