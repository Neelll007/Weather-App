import { React, useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
// import DisplayWeather from "./components/DisplayWeather";
import NightBg from "./NigthTimeBg.jpg";
import AfterBg from "./AfterNoonBg.jpg";
import MorningBg from "./morningTimeBg.jpg";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  const setBackgroundImageByTime = () => {
    const currentHour =new Date().getHours();
    console.log(currentHour);
    if (currentHour >= 6 && currentHour < 12) {
      setBackgroundImage(MorningBg);
    } else if (currentHour >= 12 && currentHour < 18) {
      setBackgroundImage(AfterBg);
    } else {
      setBackgroundImage(NightBg);
    }
  };

  useEffect(() => {
    setBackgroundImageByTime();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Weather />
      {/* <DisplayWeather data={Weather.data}/> */}
    </div>
  );
}

export default App;
