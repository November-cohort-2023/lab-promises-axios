import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("https://swapi.dev/api/people/4")
    .then((res) => {
      console.log(res.data);
      return axios.get("https://restcountries.com/v3.1/name/france");
    })
    .then((res) => {
      console.log(res, "res from france");
      console.log(res.data[0].name.common, "is the name of france");
      return axios.get(" https://restcountries.com/v3.1/all")
    })
    .then((res)=> {
      console.log(res, "this is the res from api for all countries")
      console.log(res.data.filter((country, index)=> {
        return index < 10
      }), "these are the first 10 countries")
    })

}

export default App;
