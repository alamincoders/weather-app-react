import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";
import "./styles/App.css";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
}

export default App;
