This project uses an API to simulate a live server where users can post links to websites. Each user can favorite stories, post their own stories, and see which users have posted stories. 
The website uses several CSS and JS files to create a working database. The purpose of each file is described below.

main.js:
- defines global variables
- creates a function allowing individual variables to be shown on their own
- creates functions for opening the website and remembering logged in users

nav.js
- creates functions and event listeners for nav bar functionality

stories.js
- creates functions and event listeners for story functionality including submitting new stories, favoriting stories, deleting stories, and showing stories in "my stories" and "favorites"

user.js
- creates functions and event listeners for handling user login and logout

models.js
- creates backend functions to ensure the API is interacting with the page and all event listeners are appropriately functioning

CSS files:

site.css, nav.css, stories.css, user.css - Styling for associated user interfaces
