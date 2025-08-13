import {useState} from "react"
import Forecast from "./Components/Forecast/Forecast"
import Header from "./Components/Header/Header"
import Search from "./Components/Search/Search"
import Weather from "./Components/Weather/Weather"

const API_KEY = "5a31fd1f1ac1c9aada000c65bc5dd45f";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
     try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      ),
    ]);

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    console.log(forecastData); // should now log the forecast list once

    setWeather(weatherData);
    setForecast(forecastData);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
    setLoading(false);
  };

  return (
    <>
      <Header/>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading weather...</p>}
      <Weather data={weather} />
      <Forecast data={forecast} />
    </>
  )
}

export default App
