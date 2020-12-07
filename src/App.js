import React, { useState, useEffect } from "react";
import requests from "./Requests";
import Weather from "./Weather"

function App() {

    return (
    <div className="App">
            <Weather title="Toronto" fetchUrl={requests.fetchWeather} />
    </div>
  );
}

export default App;
