import "./App.css";
import axios from "axios";

function App() {
  axios.get("https://swapi.dev/api/people/4").then((result) => {
    console.log(result.data);
  });

  axios.get("https://restcountries.com/v3.1/name/france").then((france) => {
    console.log(france.data[0].name.common);
  });

  axios
    .get("https://restcountries.com/v3.1/all")
    .then((result) => {
      console.log(result.data.slice(0, 10));
    })
    .catch((err) => {
      console.log(err);
    });

  async function getCountries() {
    try {
      const result = await axios.get("https://restcountries.com/v3.1/all");

      console.log(result.data.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  }

  getCountries();

  return <div className="App"></div>;
}

export default App;
