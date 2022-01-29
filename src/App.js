import { GetAllWeather } from "./components/GetAllWeather/GetAllWeather";
import { WeatherProvider } from "./context/WeatherContext";
import FilterCountry from "./components/Filter/FilterCountry";
import ThemeContainer from "./components/ThemeContainer/ThemeConainer";

function App() {
  return (

      <WeatherProvider>
        <ThemeContainer/>
      </WeatherProvider>
  );
}

export default App;
