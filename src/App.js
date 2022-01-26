import { GetAllWeather } from "./components/API/getAllWeather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
      <WeatherProvider>
        <GetAllWeather>
        </GetAllWeather>
      </WeatherProvider>
  );
}

export default App;
