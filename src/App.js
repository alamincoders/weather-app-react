import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Default from "./components/Default";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import "./styles/App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./utils/api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // handle search data
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const ForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherFetch, ForecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err.message));
  };

  // console.log(currentWeather);
  console.log(forecast);
  return (
    <div>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
      {!currentWeather && <Default />}
    </div>
  );
}

export default App;
