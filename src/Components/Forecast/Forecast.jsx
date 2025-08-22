import React from 'react'
import './Forecast.css'

const Forecast = ({ data }) => {

   if (!data) return null;

  // Group forecast entries by date
  // Filter to 12:00 PM entry for each day
const dailyData = {};

  data.list.forEach((item) => {
  const date = item.dt_txt.split(" ")[0];

  if (!dailyData[date]) {
    dailyData[date] = {
      temps: [],
      iconEntry: null,
    };
  }

  // Push both min and max of this 3-hour block
  dailyData[date].temps.push(item.main.temp_min);
  dailyData[date].temps.push(item.main.temp_max);

  // Pick 12:00 PM entry for icon
  if (item.dt_txt.includes("12:00:00")) {
    dailyData[date].iconEntry = item.weather[0];
  }
});

  // Prepare next 5 days
  const nextFiveDays = Object.keys(dailyData)
    .slice(0, 5)
    .map((date) => ({
      date,
      min: Math.min(...dailyData[date].temps),
      max: Math.max(...dailyData[date].temps),
      weather: dailyData[date].iconEntry || { icon: '01d', description: 'N/A' },
    }));


  return (
    <>
      <div className="forecast">
        <h3>5-Day forecast</h3>
        {nextFiveDays.map((day) => (
          <div key={day.date} className="forecast-day">
            <span>
            {new Date(day.date).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
            </span>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
              alt={day.weather.description}
              width={40}
            />

            {/* <p>{day.weather.description}</p> */}

            <p>{Math.round(day.max)}° / {Math.round(day.min)}°</p>
        
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast