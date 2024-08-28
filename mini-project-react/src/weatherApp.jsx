import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherinfo] = useState({
    city: "Hyderabad",
    feelsLike: 28.8,
    humidity: 65,
    temp: 27.23,
    tempMax: 28.73,
    tempMin: 27.23,
    Weather: "scattered clouds",
  });
  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };

  return (
    <div>
      <h1>Wheater App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
