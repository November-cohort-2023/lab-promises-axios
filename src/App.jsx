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
      return axios.get(" https://restcountries.com/v3.1/all");
    })
    .then((res) => {
      console.log(res, "this is the res from api for all countries");
      console.log(
        res.data.filter((country, index) => {
          return index < 10;
        }),
        "these are the first 10 countries"
      );
      console.log(res.data, 'the res data after filter 250, does not mutate')
      console.log(res.data.splice(0, 10), "10 first countries with splice")
      console.log(res.data, "the res data after splice 240 ,mutates")
      console.log(res.data.slice(0, 10), "the next 10 first countries from remnaining 240")
      console.log(res.data, "the res data after splice and slice 240, slice does not mutate")
    });

    async function getDarthVader() {
      try {
        const darthVader = await axios.get('https://swapi.dev/api/people/4')
        console.log(darthVader, 'the res for Darth Vader')
        console.log(darthVader.data, 'these are the data from darthVader res')
      }
      catch(err) {
        console.log(err, 'this is the error')
      }
    }

    async function getFrance() {
      try {
        const resFrance = await axios.get('https://restcountries.com/v3.1/name/france')
        console.log(resFrance, 'the res for France')
        console.log(resFrance.data[0].name.common, 'the name of france from async await')
      }
      catch(err) {
        console.log(err)
      }
    }

    async function getCountries() {
      try {
        const resCountries = await axios.get(' https://restcountries.com/v3.1/all')
        console.log(resCountries, 'the res for resCountries from async await')
        console.log(resCountries.data.slice(0, 10), 'the first 10 countries with slice and async await')
      }
      catch(err) {
        console.log(err)
      }
    }

    getDarthVader()
    getFrance()
    getCountries()


  
}

export default App;
