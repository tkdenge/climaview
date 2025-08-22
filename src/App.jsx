import {useState,useEffect} from "react"
import Header from "./Components/Header/Header"
import Search from "./Components/Search/Search"
import Weather from "./Components/Weather/Weather"
import Forecast from "./Components/Forecast/Forecast"
import Footer from "./Components/Footer/Footer"

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

  const handleSearchByCoords = async (lat, lon) => {
    setLoading(true);
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ),
      ]);

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

   useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          handleSearchByCoords(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          console.warn("Geolocation denied or failed:", err.message);
          handleSearch("Cape Town"); // fallback city
        }
      );
    } else {
      handleSearch("Cape Town"); // fallback if browser doesn’t support geolocation
    }
  }, []);

  return (
    <>
      <Header/>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading weather...</p>}
      <Weather data={weather} />
      <Forecast data={forecast} />
      <Footer/>
    </>
  )
}

export default App
