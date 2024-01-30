import "./App.css";
import axios from "axios";

function App() {
  // iteration 1
  axios
    .get("https://swapi.dev/api/people/4")
    .then((result) => {
      // console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });

  // iteration 2
  axios
    .get("https://restcountries.com/v3.1/name/france")
    .then((result) => {
      return result.data[0];
    })
    .then((franceData) => {
      // console.log(franceData.name.common);
    })
    .catch((err) => {
      console.log(err);
    });

  // iteration 3
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((allCountries) => {
      const firstTenCountries = allCountries.data.slice(0, 10);
      // console.log(firstTenCountries);
    })
    .catch((err) => {
      console.log(err);
    });

  // iteration 4
  // 1
  async function getVaderData() {
    try {
      const vaderData = await axios.get("https://swapi.dev/api/people/4");
      console.log(vaderData.data);
    } catch (err) {
      console.log(err);
    }
  }
  getVaderData();

  // 2
  async function getFrance() {
    try {
      const countryData = await axios.get(
        "https://restcountries.com/v3.1/name/france"
      );
      console.log(countryData.data[0].name.common);
    } catch (err) {
      console.log(err);
    }
  }
  getFrance();

  // 3
  async function getFirstTen() {
    try {
      const allCountires = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      const firstTen = allCountires.data.slice(0, 10);
      console.log(firstTen);
    } catch (err) {
      console.log(err);
    }
  }
  getFirstTen();

  return <div className="App"></div>;
}

export default App;
