
import { useWeather } from "../../context/WeatherContext";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import '../../style.scss';
import WeatherCard from "../WeatherCard/WeatherCard";

const defaultValues = [];
const GetAllWeather = () => {

    const { weatherList, weatherData } = useWeather();

    Object.keys(weatherList).forEach(e => {
        defaultValues["day" + e] = [
            { "temp": weatherList[e]["main"].temp },
            { "min_temp": weatherList[e]["main"].temp_min },
            { "temp_max": weatherList[e]["main"].temp_max },

        ]
    });
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var dtPast;
    var seen = [];


    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    
    const arr1 = getUniqueListBy(weatherList,'dt_txt');
                        console.log(arr1)

    return (
        <>
            <div>

                {/*
                    weatherList.map((item, e) => (
                        <div>{weatherList[e].dt_txt} Sıcaklığı : {weatherList[e]["main"].temp}</div>
                    ))*/
                }
            </div>


            <div class="weather-wrapper">
                {

                    weatherList.map((item, e) => {
                        var dt = new Date(weatherList[e].dt_txt);
                        
                        var cur = weatherList[e].dt_txt;
                        if (cur in seen) {
                            e+=3;
                        }
                        else {
                            seen.push(cur)
                            return (
                                <WeatherCard day={gunler[dt.getDay()]} temp={weatherList[e]["main"].temp} />
                            )
                        }


                    }
                    )
                }



                <div class="weather-card">
                    <div class="weather-icon cloud"></div>
                    <h1>14º</h1>
                    <div>
                        <p>Pazartesi</p>

                    </div>

                </div>
            </div>

        </>
    );
}

export { GetAllWeather };