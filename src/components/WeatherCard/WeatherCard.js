


const WeatherCard = ({ temp, day }) => {

    return (

        <div class="weather-card">
            <div class="weather-icon cloud"></div>
            <h1>{temp}º</h1>
            <div>
                <p>{day}</p>
            </div>
        </div>
    )

}

export default WeatherCard;