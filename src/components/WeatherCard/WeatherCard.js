


const WeatherCard = ({ temp, day,icon }) => {

    return (

        <div class="weather-card">
            <div class={`weather-icon ${icon}`}></div>
            <h1>{temp}º</h1>
            <div>
                <p>{day}</p>
            </div>
        </div>
    )

}

export default WeatherCard;