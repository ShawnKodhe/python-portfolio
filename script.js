fetch("https://api.github.com/users/ShawnKodhe/repos")

.then(res => res.json())

.then(data => {

const container = document.getElementById("repos")

data.forEach(repo => {

const div = document.createElement("div")

div.classList.add("repo")

div.innerHTML = `

<h3>${repo.name}</h3>

<p>${repo.description || "Python Project"}</p>

<a href="${repo.html_url}" target="_blank">View Code</a>

`

container.appendChild(div)

})

})

particlesJS.load('particles-js',
'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json')