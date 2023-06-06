const axios = require('axios');
const Weather = require('./model/weatherAPi');

//function to fetch the savedtime to retun the weather condition
const fetchWeatherData = async () => {
    try {
      const weather = await Weather.findOne().sort({ savedTime: -1 });
      return weather;
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      throw error;
    }
  };
  //to validate data is entered corrected
  const storeWeatherData = async () => {
    try {
      const weatherData = await fetchWeatherData();
      const weather = new Weather(weatherData);
      await weather.validate();
      await weather.save();
      console.log('Weather data stored successfully.');
    } catch (error) {
      if (error.errors) {
        console.error('Weather validation failed:', error.errors);
      } else {
        console.error('Failed to store weather data:', error);
      }
    }
  };
  

module.exports = { storeWeatherData };
