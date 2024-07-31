import axios from 'axios'
import './App.css'


function App() {

  //Iteration 1

  axios.get('https://swapi.dev/api/people/4')
  .then((onePeople)=>{
console.log(onePeople.data)
  })

  //Iteration 2

  axios.get('https://restcountries.com/v3.1/name/france')
  .then((oneCountry)=>{
    console.log(oneCountry.data[0].name.common)
  })

  //Iteration 3

    axios.get(`https://restcountries.com/v3.1/all`)
  .then((country)=>{
    console.log(country.data.slice(0,10))

  })


//Iteration 4

async function getPeople(){
  const onePeople = await axios.get('https://swapi.dev/api/people/4')
  console.log(onePeople.data)
}
getPeople()

async function getCountry(){
  const oneCountry = await axios.get('https://restcountries.com/v3.1/name/france')
  console.log(oneCountry.data[0].name.common)
}
getCountry()

  return (
    <div className='App'>
    </div>
  )
}

export default App
