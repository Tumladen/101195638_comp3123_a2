import React, { useState, useEffect } from "react";
import axios from "./axios";

function Weather({ title, fetchUrl }) {
    const [weather, setWeather] = useState([]);


    const dateGetter = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return day + " " + date + " " + month + " " + year
    }



    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setWeather(request)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(weather);

    

    
    return (
        <div>
            <main>
                <div className="toronto-box">
                    <h1>{title}</h1>
                    <div className="date">{dateGetter(new Date())}</div>

                </div>
                <div className="toronto-weather">
                    <div className="temp">
                        <h3>Temperature</h3>
                        {weather.data.main.temp}
                    </div>
                    <div className="feels_like">
                        <h3>Feels Like</h3>
                        {weather.data.main.feels_like}
                    </div>
                    <div className="weather">
                        <h3>Weather</h3>
                        {weather.data.weather[0].main}
                    </div>
                    <div>
                       
                    </div>
                </div>
            </main>
        </div>
        )
}


export default Weather