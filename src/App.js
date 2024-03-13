import React from "react";

import "./App.css";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-time Weather Forecast App</h1>
      </header>
      <main>
        <WeatherForecast/>
      </main>
      <footer>
        <p>© 2024 Weather App Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
