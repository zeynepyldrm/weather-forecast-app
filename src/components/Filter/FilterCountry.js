import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useWeather } from '../../context/WeatherContext';

import './style.css'
const FilterCountry = () => {

    const { country, setCountry } = useWeather();

    const handleChange = (e) => {
        setCountry(e.target.value);
        console.log(country)
    }


    return (
        <>
            <form>
                <div class="pseudo-search">
                    <input type="text" placeholder="Search..." autofocus required value={country} onChange={handleChange} />
                    <i class="fa fa-globe places"></i>
                    <button class="fa fa-search" type="submit"></button>
                </div>

            </form>
        </>

    )
}

export default FilterCountry;