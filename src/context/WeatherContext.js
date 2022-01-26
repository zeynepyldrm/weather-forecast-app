import axios from "axios";

import { createContext, useContext, useState ,useEffect } from "react";



const WeatherContext=createContext();


const WeatherProvider=({children})=>{

    const [weatherList,setWeather]=useState([]);
    const [country, setCountry] = useState("istanbul")
   
}

const useWeather=()=>useContext(WeatherContext);

export {useWeather,WeatherProvider};