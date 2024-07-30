import './App.css'
import axios from 'axios'

function App() {

  axios.get('https://swapi.dev/api/people/4').then((vader)=>{
    console.log(vader.data)
  })

  axios.get('https://restcountries.com/v3.1/name/france')
    .then((france)=>{
      console.log(france.data[0].name.common)
    })

    axios.get('https://restcountries.com/v3.1/all')
    .then((allCountries)=>{
      console.log(allCountries.data)
    })

    async function vaderData() {
      const vader = await axios.get('https://swapi.dev/api/people/4');
      console.log(vader.data);
    }

    vaderData();

    async function franceData() {
      const france = await axios.get('https://restcountries.com/v3.1/name/france');
      console.log(france.data[0].name.common);
    }
    
    franceData();

    async function allCountriesData() {
      const allCountries = await axios.get('https://restcountries.com/v3.1/all');
      console.log(allCountries.data); 
    }
  
    allCountriesData();


  

  return (
    <div className='App'>
      

    </div>
  )
}

export default App
