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
                <div className="pseudo-search">
                    <input type="text" placeholder="Search..." autoFocus required value={country} onChange={handleChange} />
                    <i className="fa fa-globe places"></i>
                    <button className="fa fa-search" type="submit"></button>
                </div>

            </form>
        </>

    )
}

export default FilterCountry;