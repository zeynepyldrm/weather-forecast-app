import { useWeather } from "../../context/WeatherContext";
import FilterCountry from "../Filter/FilterCountry"
import { GetAllWeather } from "../GetAllWeather/GetAllWeather"

import './theme.css';


const ThemeContainer = () => {

    const {theme,setTheme}=useWeather();
    var check=theme ==="dark" ? "true" : "false";
    var them;
    const handleChange =(e)=>{
        
        if(e.target.checked){
            them="dark"
        }
        else{
            them="light"
        }
        console.log(them)
        setTheme(them);
    }
    return (

        <div className={`body ${theme}`}>
            <label class="switch">
                <input type="checkbox" onChange={handleChange}/>
                    <span class="slider round"></span>
            </label>
            <FilterCountry />
            <GetAllWeather />
        </div>

    )
}

export default ThemeContainer;