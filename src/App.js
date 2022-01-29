import { GetAllWeather } from "./components/GetAllWeather/GetAllWeather";
import { WeatherProvider } from "./context/WeatherContext";
import FilterCountry from "./components/Filter/FilterCountry";

function App() {
  return (

      <WeatherProvider>
        <FilterCountry />
        <GetAllWeather/>
      </WeatherProvider>
  );
}

export default App;
