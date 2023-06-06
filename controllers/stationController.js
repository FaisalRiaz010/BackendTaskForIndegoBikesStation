
const Station = require('../model/indiagoAPis');
const Weather = require('../model/weatherAPi');

const getAllStations = async (req, res) => {
  console.log("yes i am all station");
  try {
    // Fetch station data from the database
    const stations = await Station.find();

    // Fetch weather data from the database
    const weather = await Weather.findOne().sort({ savedTime: -1 });

    // Check if weather data exists
    if (!weather) {
      return res.status(404).json({ error: 'Weather data not found' });
    }

    // Construct the response object,
    const response = {
      at: weather.savedTime,
      stations,
      weather,
    };

    res.json(response);
  } catch (error) {
    console.error('Error retrieving stations:', error);
    res.status(500).json({ error: 'Failed to retrieve stations' });
  }
};
//not working yet
const getStationByIdAndTime = async (req, res) => {
  console.log("yes i am ID station");
  const { kioskId } = req.params;
  const { at } = req.query;

  try {
    // Find the station with the specified ID
    const station = await Station.findOne({ 'properties.kioskId': kioskId });

    // Check if the station exists
    if (!station) {
      return res.status(404).json({ error: 'Station not found' });
    }

    // Get the savedTime from the station document
    const savedTime = station.savedTime;

    // Use the provided time (if available) or the savedTime to search in the weather collection
    const time = at ? new Date(at) : savedTime;
    const weather = await Weather.findOne({ savedTime: time });

    // Check if the weather data exists
    if (!weather) {
      return res.status(404).json({ error: 'Weather data not found' });
    }

    // Construct the response object
    const response = {
      at: savedTime,
      station,
      weather,
    };

    res.json(response);
  } catch (error) {
    console.error('Error retrieving station and weather:', error);
    res.status(500).json({ error: 'Failed to retrieve station and weather' });
  }
};



module.exports = { getAllStations, getStationByIdAndTime};
