import './App.css'
import axios from 'axios'

function App() {

//Iteration 1
  axios.get("https://swapi.dev/api/people/4")
  .then((result)=>{
    console.log(result.data)
  })
  .catch((error)=>{
    console.log(error)
  })

  //Iteration 2
  axios.get("https://restcountries.com/v3.1/name/france")
  .then((france)=>{
    console.log(france.data[0].name)
  })
  .catch((error)=>{
    console.log(error)
  })

  //Iteration 3
  axios.get("https://restcountries.com/v3.1/all")
  .then((allCountries)=>{
    console.log(allCountries.data.slice(0,10))
  })
  .catch((error)=>{
    console.log(error)
  })

  //Iteration 4

  async function iteration4 () {  
  const people4 = await axios.get("https://swapi.dev/api/people/4")
  const countryFrance = await axios.get("https://restcountries.com/v3.1/name/france")
  const countries = await axios.get("https://restcountries.com/v3.1/all")

  console.log(people4.data)
  console.log(countryFrance.data[0].name)
  console.log(countries.data.slice(0,10))
} 

iteration4()

  return (
    <div className='App'>
    </div>
  )
}

export default App
