function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(repo)
  .then(resp => resp.json())
  .then(json => console.log(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ' ';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
  return ''
}
