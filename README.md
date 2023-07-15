# Bike Station Snapshot Project

This project provides a snapshot of bike stations along with weather information. 
It retrieves data from a backend API and presents it in a user-friendly format.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the project root directory.
3. Start the development server by running `npm run dev`.
4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Features

- Displays a snapshot of bike stations with availability and weather information on specific time.
- Allows searching for a specific bike station by Kiosk ID on time .

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Heroku

## API Documentation

The backend API provides the following endpoints:

- `GET /api/v1/stations`: Retrieves the snapshot of bike stations with weather information.
- `GET /api/v1/stations/:kioskId?at=time`: Retrieves a specific bike station by Kiosk ID.

Please refer to the API documentation for detailed information on the request and response formats.

## Heroku Server API

The project is deployed on Heroku, and you can access the API using the following base URL:
https://indeagoapp.herokuapp.com/api/v1

To make API requests, you can append the desired endpoints to the base URL. For example:

- Retrieve the snapshot of stations with weather information: `GET https://indeagoapp.herokuapp.com/api/v1/stations`
- Retrieve a specific station by Kiosk ID by specific time: `GET https://indeagoapp.herokuapp.com/api/v1/stations/3014?at=2023-06-04T17:10:50.164Z`

Please note that the availability and functionality of the Heroku server may vary depending on the deployment status and configuration of your application.

## Contributing

Contributions to the project are welcome. Feel free to open issues or submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).


