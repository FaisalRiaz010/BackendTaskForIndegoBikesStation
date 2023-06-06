const mongoose = require('mongoose');
//likewise APis structure design model
const weatherSchema = new mongoose.Schema({
  coord: {
    lon: Number,
    lat: Number,
  },
  weather: [
    {
      id: Number,
      main: String,
      description: String,
      icon: String,
    },
  ],
  base: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number,
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
    gust: Number,
  },
  rain: {
    "1h": Number,
  },
  clouds: {
    all: Number,
  },
  dt: Number,
  sys: mongoose.Schema.Types.Mixed,
  timezone: Number,
  id: Number,
  name: String,
  cod: Number,
  savedTime: {
    type: Date,
    default: Date.now,
  },
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
