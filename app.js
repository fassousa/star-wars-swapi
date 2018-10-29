let button = document.querySelector("#button");
let planet = document.querySelector("#planetName");
let population = document.querySelector("#population");
let climate = document.querySelector("#climate");
let terrain = document.querySelector("#terrain");
let moviesFeature = document.querySelector("#movieFeatures");

function getInfo() {
  let randomNumber = Math.floor(Math.random() * 61 + 1);
  let apiUrl = "https://swapi.co/api/planets/" + randomNumber;

  axios.get(apiUrl).then(function(response) {
    updateInfo(response.data);
  });
}

function updateInfo(data) {
  planet.innerText = data.name;
  population.innerText = `Population: ${data.population}`;
  climate.innerText = `Climate: ${data.climate}`;
  terrain.innerText = `Terrain: ${data.terrain}`;
  if (data.films) {
    let counter = data.films.length;
    moviesFeature.innerText = `Featured in ${counter} movies`;
  }
}

button.addEventListener("click", getInfo);

// Estrelas de background
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}
