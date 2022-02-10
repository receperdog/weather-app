import axios from "axios";
import { useState } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.local.NEXT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(data);
    } catch (error) {
      alert("Error during the get process");
    }
  };
};
