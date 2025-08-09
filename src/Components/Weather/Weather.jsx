import React from 'react'
import './Weather.css'
import { GrLocation } from 'react-icons/gr'
import { BsCloudy } from 'react-icons/bs' 
import { WiHumidity } from 'react-icons/wi'

const Weather = () => {
  return (
    <>
      <div className="weather">
        <div className="weather-location">
          <GrLocation size={32}/>
          <h1>Cape Town</h1>
        </div>

        <div className="weather-section">
          <div className="weather-temp">
            <h1>18°</h1>
          </div>
          
          <div className="weather-icon">
            <BsCloudy size={25}/>
            <h3>Partly Cloudy</h3>
          </div>

          <div className="weather-feels">
            <p>Feels like 15°</p>
            <div className="weather-hum">
              <div className="hum-icon-title">
                <WiHumidity size={20}/>
                <h3>Humidity</h3>
              </div>
              <p>71%</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Weather