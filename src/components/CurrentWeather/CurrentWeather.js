import React from "react";
import "../../styles/CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div className="">
          <p className="city">London</p>
          <p className="weather_desc">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather_icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter_row">
            <span className="parameter_label">Details</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Feels like</span>
            <span className="parameter_value">22°C</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Wind</span>
            <span className="parameter_value">2 m/s</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Humidity</span>
            <span className="parameter_value">15%</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Pressure</span>
            <span className="parameter_value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
