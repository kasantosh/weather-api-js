// Init weather object
const weather = new Weather('Mississauga', 'ON');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  // Get and display Weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');


});

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results.current.temperature);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}