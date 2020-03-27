// Init weather object
const weather = new Weather('Mississauga', 'ON');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results.current.temperature);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}