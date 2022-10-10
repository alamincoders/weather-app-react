import React from "react";
import "../../styles/CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  const { city, weather, main, wind } = data;
  return (
    <div className="weather">
      <div className="top">
        <div className="">
          <p className="city">{city}</p>
          <p className="weather_desc">{weather[0]?.description}</p>
        </div>
        <img src={`icons/${weather[0]?.icon}.png`} alt="weather" className="weather_icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(main?.temp)}°C</p>
        <div className="details">
          <div className="parameter_row">
            <span className="parameter_label">Details</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Feels like</span>
            <span className="parameter_value">{Math.round(main?.feels_like)}°C</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Wind</span>
            <span className="parameter_value">{wind?.speed} m/s</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Humidity</span>
            <span className="parameter_value">{main?.humidity}%</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Pressure</span>
            <span className="parameter_value">1{main?.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
