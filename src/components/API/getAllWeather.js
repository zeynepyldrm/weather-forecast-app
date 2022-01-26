import axios from "axios";
import { useWeather } from "../../context/WeatherContext";



const GetAllWeather=()=>{

    const {weatherList}=useWeather();
    return(
        <>
        <div>
           <h1>
               json values
           </h1>
           {
               JSON.stringify(weatherList)
           }
           
           
        </div>
        </>
    )
}
export {GetAllWeather};