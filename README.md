# Weather Monitoring System  
  
A real-time weather monitoring system built using Node.js, Express, and PostgreSQL.  
  
## Table of Contents  
  
* [Getting Started](#getting-started)  
* [PostgreSQL Queries](#postgresql-queries)  
* [.env File](#.env-file)  
* [Test Cases](#test-cases)  

  
## Getting Started  
  
To get started with the project, follow these steps:  
  
1. Clone the repository: `git clone](https://github.com/ruchir1029/Zio_weather_application) 
2. Install the dependencies: `npm install`  
3. Create a `.env` file with the following variables:  
	* `DB_HOST`  
	* `DB_USER`  
	* `DB_PASSWORD`  
	* `DB_NAME`  
	* `API_KEY`  
4. Run the application: `npm start`  
  
## PostgreSQL Queries  
  
The following PostgreSQL queries are used in the application:  
  
CREATE TABLE weather (  
  id SERIAL PRIMARY KEY,  
  location VARCHAR(50),  
  main VARCHAR(50),  
  temp REAL,  
  feels_like REAL,  
  dt INTEGER  
);  
  
CREATE TABLE daily_summary (  
  id SERIAL PRIMARY KEY,  
  date DATE,  
  location VARCHAR(50),  
  avg_temp REAL,  
  max_temp REAL,  
  min_temp REAL,  
  dominant_weather VARCHAR(50)  
);  
  
CREATE TABLE alerts (  
  id SERIAL PRIMARY KEY,  
  location VARCHAR(50),  
  threshold REAL,  
  weather_condition VARCHAR(50),  
  triggered BOOLEAN  
); 
  
## .env File  
  
The `.env` file should contain the following variables:  
  
* `DB_HOST=localhost`  
* `DB_USER=your_username`  
* `DB_PASSWORD=your_password`  
* `DB_NAME=weather_monitoring_system`  
* `API_KEY=your_api_key`  
  
## Test Cases  
  
The following test cases are included in the application:  
  
* `GET /weather`: Returns a list of weather data for the specified location.  
* `GET /dailySummary`: Returns a daily summary of weather data for the specified location.  
* `POST /alerts`: Creates a new alert for the specified location and weather condition.  

