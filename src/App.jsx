import axios from "axios";
import "./App.css";

function App() {
  async function fetchDarthVaderData() {
    await axios
      .get("https://swapi.dev/api/people/4")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchFranceData() {
    await axios
      .get("https://restcountries.com/v3.1/name/france")
      .then((result) => {
        console.log(result.data[0].name.common);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchDarthVaderData();
  fetchFranceData();

  return <div className="App"></div>;
}

export default App;
