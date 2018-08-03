$(document).ready(function(){
    // listen for the user to click the button
    // when the user clicks the button, send an AJAX request to get the repos from the URL
    // when we get the response back from the web requst, we'll list the repos
    $("#get-repos").on("click", buttonClickCallback)
})


function buttonClickCallback() {
  // when the user clicks the button, send an AJAX request to get the repos from the URL
//   $.ajax({
//     url: "https://api.github.com/users/sophiedebenedetto/repos",
//     data: "json",
//     success: successFunction,
//     error: failureFunction
//   })
  fetch("https://api.github.com/users/sophiedebenedetto/repos")
    .then(successFunction)
    .then(anotherSuccessFunction)
    .catch(failureFunction);
}

function successFunction(response) {
  return response.json();
}

function anotherSuccessFunction(response) {
  debugger;
  response.forEach(function(repo) {
    $("ul#repo-results").append("<li>" + repo.name + "</li>")
  })
}

function failureFunction(response) {
  alert("Sorry, something went wrong")
}
