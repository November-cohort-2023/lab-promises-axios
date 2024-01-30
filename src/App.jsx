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

  fetchDarthVaderData();

  return <div className="App"></div>;
}

export default App;
