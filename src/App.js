import { GetAllWeather } from "./components/API/GetAllWeather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (

      <WeatherProvider>
        <GetAllWeather/>
      </WeatherProvider>
  );
}

export default App;
