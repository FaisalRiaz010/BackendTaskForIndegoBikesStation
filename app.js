const express = require('express');
const mongoose = require('mongoose');
const { storeWeatherData } = require('./weatherservice');
require('dotenv').config();



// Import the route controllers
const indegoDataController = require('./controllers/indegoDataController');
const stationController = require('./controllers/stationController');

// Create an instance of the Express application
const app = express();

// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL||"mongodb+srv://FaisalRiaz:12345678foggy@indeagoapi.hx1cros.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  
    app.get('/home',(req,res)=>{
      
    res.send('<h1>Heloo for my worls</h1>')
    res.end()
    })

    // Open Weather Map API key
    const apiKey = '588b51ce289a35323054cad5892a43f1';

    // Fetch and store weather data
    storeWeatherData(apiKey);

    // Define routes
    //for fetching th connection of mongodb and data from APIs of indiago is stored and fetched correctly
     app.get('/api/v1/indego-data-fetch-and-store-it-db', indegoDataController.fetchAndStoreIndegoData);
     //get the all station by timme of availability
    app.get('/api/v1/stations', stationController.getAllStations);
    //get the specific station on time 
    app.get('/api/v1/stations/:kioskId', stationController.getStationByIdAndTime);
    

    const PORT = process.env.PORT||3000; //  port number

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

module.exports = app;
