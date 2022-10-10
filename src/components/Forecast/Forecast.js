import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "../../styles/Forecast.css";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
      <h2 htmlFor="title" className="title">
        {" "}
        Daily Weather Details
      </h2>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily_item">
                  <div className="fist_part">
                    <img src={`icons/${item?.weather[0]?.icon}.png`} alt="small_icon" className="icon_small" />

                    <label htmlFor="day" className="day">
                      {forecastDays[i]}
                    </label>
                  </div>

                  <div className="second_part">
                    <label htmlFor="desc" className="desc">
                      {item?.weather[0].description}
                    </label>

                    <label htmlFor="min_max" className="min_max">
                      {Math.round(item?.main.temp_min)}°C / {Math.round(item?.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily_details_grid">
                <div className="daily_details_grid_item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item?.main.pressure} hpa</label>
                </div>
                <div className="daily_details_grid_item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item?.main.humidity}%</label>
                </div>
                <div className="daily_details_grid_item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item?.clouds.all}%</label>
                </div>
                <div className="daily_details_grid_item">
                  <label htmlFor="">Wind Speed</label>
                  <label htmlFor="">{item?.wind.speed} m/s</label>
                </div>
                <div className="daily_details_grid_item">
                  <label htmlFor="">See Level</label>
                  <label htmlFor="">{item?.main.sea_level}m</label>
                </div>
                <div className="daily_details_grid_item">
                  <label htmlFor="">Feels like</label>
                  <label htmlFor="">{Math.round(item?.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
