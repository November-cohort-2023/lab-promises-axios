import './App.css'
import axios from 'axios'

// iteration 1
axios.get('https://swapi.dev/api/people/4').then((character)=>{
  console.log(character.data)
})
.catch((err)=>{console.log(err)})
// iteration 2
axios.get (`https://restcountries.com/v3.1/name/france`).then((country)=>{
console.log(country.data[0])
})
.catch((err)=>{console.log(err)})
// iteration 3
axios.get(`https://restcountries.com/v3.1/all`).then((countries)=>{
  console.log(countries.data.slice(0,10))
})


// iteration 4

async function promises(){
  try{
    const character = await axios.get('https://swapi.dev/api/people/4')
    const country = await axios.get (`https://restcountries.com/v3.1/name/france`)
    const countries = await axios.get(`https://restcountries.com/v3.1/all`)
  
    console.log(character.data)
    console.log(country.data[0])
    console.log(countries.data.slice(0,10))

  }
 

  catch(err){console.log(err)}
}


promises()

console.log(`test`)

function App() {
  return (
    <div className='App'>
    </div>
  )
}

export default App
