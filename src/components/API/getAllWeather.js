import axios from "axios";
import { useWeather } from "../../context/WeatherContext";



const GetAllWeather=()=>{

    const {weatherList}=useWeather();
    return(
        <>
        <div>
           <h1>
               arrray
           </h1>
           
           
        </div>
        </>
    )
}
export {GetAllWeather};