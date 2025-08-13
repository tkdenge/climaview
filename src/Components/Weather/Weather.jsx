import React from 'react'
import './Weather.css'
import { GrLocation } from 'react-icons/gr'
import { BsCloudy } from 'react-icons/bs' 
import { WiHumidity } from 'react-icons/wi'

const Weather = ({ data }) => {

  

  if (!data || !data.main) 
    return <p>Loading weather...</p>;
  else{
     const iconCode = data.weather[0].icon;
     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
    return (
        <>
          <div className="weather">
            <div className="weather-location">
              <GrLocation size={32}/>
              <h1>{data.name}</h1>
            </div>

            <div className="weather-section">
              <div className="weather-temp">
                <h1>{Math.round(data.main.temp)}°</h1>
              </div>
              
              <div className="weather-icon">
                {/* <BsCloudy size={25}/> */}
                <img src={iconUrl} alt={data.weather[0].description} />
                <h3>{data.weather[0].description}</h3>
              </div>

              <div className="weather-feels">
                <p>Feels like {Math.round(data.main.feels_like)}°</p>
                <div className="weather-hum">
                  <div className="hum-icon-title">
                    <WiHumidity size={20}/>
                    <h3>Humidity</h3>
                  </div>
                  <p>{Math.round(data.main.humidity)}%</p>
                </div>
              </div>
            </div>
          </div>
          
        </>
      )
    }
}

export default Weather