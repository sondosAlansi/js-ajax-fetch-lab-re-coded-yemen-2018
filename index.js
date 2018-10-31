function getIssues() {
  const repo='js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    headers:{
      Authorization:`token ${getToken()}`
    }
  })
  .then(res =>res.json())
  .then(json=>console.log(json))
}

function showIssues(json) {

}

function createIssue() {
  const repo='js-ajax-fetch-lab/issues'
  const postData={

    title:document.getElementById('title').value,
    title:document.getElementById('body').value

  }
  fetch(  `${repo}`,{
    method:'POST',
    body:JSON.stringify(postData),
    headers:{
      Authorization:`token ${getToken()}`
    }
  })
  .then(res =>res.json())
  .then(json=>console.log(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML=`<a href=${json.html_url}>${json.html_url}</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    headers:{
      Authorization:`token ${getToken()}`
    }
  })
  .then(res =>res.json())
  .then(json=>console.log(json))
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
