import './App.css'
import axios from 'axios'


function App() {

  axios.get('https://swapi.dev/api/people/4')
  .then((darthVaders)=>{
    console.log(darthVaders.data);
    return axios.get('https://restcountries.com/v3.1/name/france')
  })
  .then((france)=>{
    console.log(france.data)
    return axios.get('https://restcountries.com/v3.1/all')
  })
  .then((allCountries)=>{
    console.log(allCountries.data.slice(0,10));
  })
  .catch((err)=>{
    console.log(err);
  })

  return (
    <>
    </>
  )
}

export default App
