import React, { useState } from "react";
import ReactDOM from "react-dom";

function Weather() {
  const [weather, setWeather] = useState();

  return (
    <input
      value={weather}
      onChange={(e) => {
        setWeather(e.target.value);
        console.log(weather);
      }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);