import axios from "axios";

import { createContext, useContext, useState, useEffect } from "react";



const WeatherContext = createContext();


const WeatherProvider = ({ children }) => {

    const [weatherList, setWeather] = useState([]);
    const [country, setCountry] = useState("istanbul");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const getWeatherList = async (country) => {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&lang=tr&units=metric&cnt=49&appid=d4e0334629486ad76dfc53766e2a015e`)
            .then(req => setWeather(req.data.list))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getWeatherList(country)
    }, [country])


    //theme 
    useEffect(() => {
        localStorage.setItem("theme",theme)
    },[theme])


    const values = {
        weatherList,
        setCountry,
        country,
        theme,
        setTheme
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )

}

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };