# GitHub API Project
We'll build a simple app that allows users to click a button and see a list of YOUR public GitHub repos. Where will we get these repos? The GitHub API!

## Instructions

1. Create an HTML file, `githubApi.html`
2. Make it a well-formed HTML doc that links to the jQuery CDN in the head of the document.
3. Create a JS file, `githubApi.js` and link to that JS file from the head of your HTML file.
4. Your HTML file needs two elements: a button with an ID of `get-repos` and a div with an ID of `repo-results`.
5. Your JS file needs to use the "document ready" function to contain the follwing:
  * an event listener for the "get-repos" button. When a user clicks on that button, you should call a callback function that you will define.
  * your callback function should use AJAX to make a request to the GitHub API at this URL: `https://api.github.com/users/<your username goes here>/repos`
  * when your AJAX function receives a response from the API, that response will be in the form of an array of "repo" objects. Each object responds to `repo.name` and returns the name of the repo. Iterate over the list of repos and append a list of repo names to the HTML page in the `repo-results` div.

## Bonus Challenge
* Rewrite your AJAX request to use fetch
* Make your app dynamic! Instead of always fetching your repos, create an input box on the HTML page that allows a user to put in any github username. When the user clicks "get repos", fetch that user's repos. 
