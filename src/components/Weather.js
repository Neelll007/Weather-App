import React, { useState } from "react";
import "./weather.css";
import "./DisplayWeather";
import DisplayWeather from "./DisplayWeather";

function Weather() {
  const APIKEY = "2150bd0238b77b0cb0f2a47ff642ebc2";
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  // const [backgroundImage, setBackgroundImage] = useState("");

  // const setBackgroundImageByTime = () => {
  //   const currentHour = new Date().getHours();
  //   if (currentHour >= 6 && currentHour < 12) {
  //     setBackgroundImage("morningTimeBg.jpg");
  //   } else if (currentHour >= 12 && currentHour < 18) {
  //     setBackgroundImage("AfterNoonBg.jpg");
  //   } else {
  //     setBackgroundImage("NightTimeBG.jpg");
  //   }
  // };

  // useEffect(() => {
  //   setBackgroundImageByTime();
  // }, []);

  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Enter City and Country first:");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
    console.log(form.city, form.country);
  };

  return (
    // <div style={{ backgroundImage: `url(${backgroundImage})` }} className="container"> 
    
      <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            onChange={(e) => handleChange(e)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="country"
            placeholder="Enter Counrty"
            onChange={(e) => handleChange(e)}
          />
          <button className="getweather" onClick={(e) => weatherData(e)}>
            submit
          </button>
        </form>

        {weather.data !== undefined ? (
          <div>
            <DisplayWeather data={weather.data} />
          </div>
        ) : null}
      </div>
    // </div>
  );
}

export default Weather;
