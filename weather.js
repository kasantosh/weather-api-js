class Weather {
  constructor(city, state) {
    this.apiKey = '7ec0c4375dc8261769d1a1dcc1e12a35';
    this.city = city;
    this.state = state;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}&${this.state}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}