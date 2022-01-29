
import { useWeather } from "../../context/WeatherContext";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import '../../style.scss';
import WeatherCard from "../WeatherCard/WeatherCard";
import FilterCountry from "../Filter/FilterCountry";


const defaultValues = [];
const GetAllWeather = () => {

    const { weatherList, weatherData } = useWeather();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


    return (
        <>
            
            <div class="weather-wrapper">

                {
                    weatherList.map((item, e) => {
                        // console.log(e);

                        var dt = new Date(weatherList[e].dt_txt);
                        if (e % 7 === 0) {
                            //console.log(weatherList[e]["weather"][0].main)
                            return (
                                <WeatherCard day={gunler[dt.getDay()]} temp={weatherList[e]["main"].temp} icon={weatherList[e]["weather"][0].main} />
                            )
                        }
                        else {
                            //console.log(e)
                        }
                    }
                    )
                }
            </div>


        </>
    );
}

export { GetAllWeather };