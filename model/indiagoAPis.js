const mongoose = require('mongoose');

//acordig to model APis design it
const stationSchema = mongoose.Schema({
  geometry: {
    coordinates: [Number],
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
  },
  properties: {
    id: Number,
    name: String,
    totalDocks: Number,
    docksAvailable: Number,
    bikesAvailable: Number,
    classicBikesAvailable: Number,
    smartBikesAvailable: Number,
    electricBikesAvailable: Number,
    rewardBikesAvailable: Number,
    rewardDocksAvailable: Number,
    kioskStatus: String,
    kioskPublicStatus: String,
    kioskConnectionStatus: String,
    kioskType: Number,
    addressStreet: String,
    addressCity: String,
    addressState: String,
    addressZipCode: String,
    bikes: [
      {
        dockNumber: Number,
        isElectric: Boolean,
        isAvailable: Boolean,
        battery: Number,
      },
    ],
    closeTime: Date,
    eventEnd: Date,
    eventStart: Date,
    isEventBased: Boolean,
    isVirtual: Boolean,
    kioskId: Number,
    notes: String,
    openTime: Date,
    publicText: String,
    timeZone: String,
    trikesAvailable: Number,
    latitude: Number,
    longitude: Number,
  },
  type: {
    type: String,
    enum: ['Feature'],
    required: true,
  },
});

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;
