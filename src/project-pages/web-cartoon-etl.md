---
slug: "/projects/web-cartoon-etl"
title: "Web Cartoon ETL"
languages: python, airflow
bio: "A daily ETL to scrape a web cartoon and load into a SQL DB"
repo: "https://github.com/andrewpblee/web-cartoon-etl"
date: "2020-05-24"
---

#Web Cartoon ETL<span>.</span>

This has been a great end to end project to test my Data Engineering skills.

Using BeautifulSoup, I scrape the "Dilbert" web comic site to grab the image url and other information about the comic. I then clean the data and transform it into a dataframe, which is then appended to a table in a SQL database, provided the comic date does not already exist in the table.

The script is scheduled within airflow and should run daily at noon (as I do not have permission from the owner to scrape the site, it is currently turned off).

The aim of this project was use a functional approach to extract, transform and load the data, while handling any errors that might occur.

One aspect I would like to add to this project is unit testing, and approach the project again in a more TDD methodology, defining what each function should output, writing a test that initially fails in pytest, and then creating the function until the test passes, to ensure the that passing of a test is not a fluke. I might extend this project to include more web comics and use this approach!
