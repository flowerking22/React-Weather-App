import React, { useState } from 'react';
import axios from 'axios';
import InputCity from './InputCity';
import Result from './Result';
function App() {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const Apicall = async () => {
        const base = "https://api.openweathermap.org/data/2.5/weather?q=";
        const APIKEY = process.env.REACT_APP_apikey;
        const unit = "matric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city
            + "&appid=" + APIKEY
            + "&units=" + unit;
        const response = await axios.get(url);
        const temp = await response.data.main.temp;
        const description = await response.data.weather[0].description;
        const icon = await response.data.weather[0].icon;
        const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        setDescription(description);
        setIcon(iconUrl);
        setTemp(temp);
    }
    return (
        <div>
            {
                temp === "" ? (
                    <InputCity city={city} setCity={setCity} Apicall={Apicall} />
                ) : (
                    <Result city={city} temp={temp} description={description} icon={icon} setTemp={setTemp} setCity={setCity} />
                )}

        </div>
    )
}
export { App };