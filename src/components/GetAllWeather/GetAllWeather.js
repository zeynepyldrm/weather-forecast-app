
import { useWeather } from "../../context/WeatherContext";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import '../../style.scss';
import WeatherCard from "../WeatherCard/WeatherCard";

const defaultValues = [];
const GetAllWeather = () => {

    const { weatherList, weatherData } = useWeather();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


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
                        // console.log(e);

                        var dt = new Date(weatherList[e].dt_txt);
                        var cur = dt.toDateString();
                        console.log(weatherList[e]["weather"][0].main)
                        if (e %7 === 0) {
                            return (
                                <WeatherCard day={gunler[dt.getDay()]} temp={weatherList[e]["main"].temp} icon={weatherList[e]["weather"][0].main} />
                            )
                        }
                        else{
                            console.log(e)
                        }
                    }
                    )
                }



                <div class="weather-card">
                    <div class="weather-icon Clouds"></div>
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