import "./App.css";
import axios from "axios";
function App() {
  //Iteration 1 | Fetch the data for Darth Vader

  axios
    .get("https://swapi.dev/api/people/4")
    .then((people) => {
      console.log("people", people.data);
    })
    .catch((e) => {
      console.log(e);
    });
  // Iteration 2 | Fetch the data for the country of France
  axios
    .get("https://restcountries.com/v3.1/name/france")
    .then((country) => {
      console.log("country : ", country.data[0].name.common);
    })
    .catch((e) => {
      console.log(e);
    });
  //Iteration 3 | Fetch the data for all countries
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((countries) => {
      const size = 10;
      let items = countries.data.slice(0, size).map((country) => {
        return country;
      });
      console.log(items);
    })
    .catch((e) => {
      console.log(e);
    });

  // Iteration 4 | Use async await to handle the promises

  async function getCountries() {
    try {
      const countries = await axios.get("https://restcountries.com/v3.1/all");
      let items = countries.data.slice(0, 10).map((item) => {
        return item;
      });
      console.log(items);
    } catch (e) {
      console.log(e);
    }
  }
  getCountries();
  return <div className="App"></div>;
}

export default App;
