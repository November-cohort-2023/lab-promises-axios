import './App.css'
import axios from 'axios'

function App() {

  // // Iteration 1
  // axios.get('https://swapi.dev/api/people/4')
  // .then((result)=>{
  //   console.log(result.data)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })

  // // Iteration 2
  // axios.get('https://restcountries.com/v3.1/name/france')
  // .then((result)=>{
  //   console.log(result.data[0].name.common)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  
  // // Iteration 3
  // axios.get('https://restcountries.com/v3.1/all')
  // .then((result)=>{
  //   let countriesCopied = result.data.filter((countryData, index)=>{
  //     return index < 10
  //   })
  //   console.log(countriesCopied)
  // })

  // Iteration 4

    // Iteration 1
    async function darthVader(){
      try{
        const darthInfo = await axios.get('https://swapi.dev/api/people/4')
        console.log(darthInfo.data)
      }
      catch(err){
        console.log(err)
      }
    }
    darthVader()
    
  
    // Iteration 2
    async function nameFrance(){
      try{
        const france = await axios.get('https://restcountries.com/v3.1/name/france')
        const franceName = france.data[0].name.common
        console.log(franceName)
      }
      catch(err){
        console.log(err)
      }
    }
    nameFrance()
    
    // Iteration 3
    async function firstTen(){
      try{
        const allCountries = await axios.get('https://restcountries.com/v3.1/all')
        const tenCountries = allCountries.data.filter((oneCountry, index)=>{
          return index < 10
        })
        return console.log(tenCountries)
      }
      catch(err){
        console.log(err)
      }
    }
  firstTen()


  return (
    <div className='App'>
    </div>
  )
}

export default App
