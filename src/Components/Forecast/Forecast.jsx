import React from 'react'
import './Forecast.css'

const Forecast = ({ data }) => {

   if (!data || !data.list) 
    return console.log('hello');

    console.log(data);

  // Filter to show 1 forecast per day (at 12:00 PM)
  const dailyForecast = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <>
      <div className="forecast">
        <h3>5-Day forecast</h3>
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short"
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} width={40}
              alt={day.weather[0].description}
            />
            <p>{Math.round(day.main.temp)}°</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast