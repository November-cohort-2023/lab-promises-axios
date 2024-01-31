import './App.css'
import axios from 'axios'

function App() {

//Iteration 1

axios.get('https://swapi.dev/api/people/4')
.then((result)=>{
  console.log(result.data)
})

//Iteration 2

axios.get('https://restcountries.com/v3.1/name/france')
.then((france) => {
  console.log(france.data[0].name)
})

// Iteration 3

axios.get('https://restcountries.com/v3.1/all')
.then((response)=>{
  const allCountries = response.data

  allCountries.slice(0,10).forEach(country=> {
    console.log(country)
  })
  })
  .catch((err) => {
    console.log(err)
  })
}


// Iteration 4
// 1.0
try{
  async function obtainPerson4(){
    const person4 = await axios.get('https://swapi.dev/api/people/4')
    console.log(person4.data)
  }
  
  console.log(obtainPerson4())
}
catch(err){
  console.log(err)
}



//2.0
try{
  async function getFrance() {
    const france = await axios.get('https://restcountries.com/v3.1/name/france')
    console.log(france.data[0].name)
  }
  console.log(getFrance())
}
catch(err){
  console.log(err)
}



//3.0
try{
  async function getTenCountries() {
    const countries = await axios.get('https://restcountries.com/v3.1/all')
    const countriesData = countries.data
    countriesData.slice(0,10).forEach(country => {
      console.log(country)
    })
  }
  console.log(getTenCountries())
}
catch(err){
  console.log(err)
}


export default App

