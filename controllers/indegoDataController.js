const axios = require('axios');
const Station = require('../model/indiagoAPis');

const fetchAndStoreIndegoData = async (req, res) => {
  console.log('Indego data fetch and store route handler');
  try {
    // Fetch data from the Indego API
    const response = await axios.get('https://bts-status.bicycletransit.workers.dev/phl');

    // Extract the relevant station data from the response
    const stations = response.data.features;

    // Store the station data in the database
    await Station.deleteMany(); // Clear existing data
    await Station.insertMany(stations); // Insert new data

    res.status(200).json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    console.error('Failed to fetch and store data:', error);
    res.status(500).json({ error: 'Failed to fetch and store data' });
  }
};


module.exports = {
  fetchAndStoreIndegoData,
};
