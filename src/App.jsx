import './App.css'
import axios from 'axios'


function App() {

// Iteration 1

axios.get('https://swapi.dev/api/people/4')
.then((result)=>{console.log(result.data)})
.catch((error)=>{
  console.log(error)
 })
   

// Iteration 2

axios.get('https://restcountries.com/v3.1/name/france')
.then((result)=>{console.log(result.data[0].name.common)})
.catch((error)=>{
  console.log(error)
 })


// Iteration 3

 async function fetchData() {
   try {
     
     const response = await axios.get('https://restcountries.com/v3.1/all')
 
     response.data.slice(0, 10).forEach(country => console.log(country))
   } catch (error) {
     console.log(error)
   }
 }
 
 fetchData()
 
// Iteration 4

async function getDarthVader() {
  try {
    const darthVader = await axios.get('https://swapi.dev/api/people/4')
    console.log(darthVader.data)
  } catch (error) {
    console.log(error)
  }
}

getDarthVader()

async function getFrance(){
  try{
    const france = await axios.get('https://restcountries.com/v3.1/name/france')
    console.log(result.data[0].name.common)
  } catch (error){
    console.log(error)
  }
}

getFrance()



axios.get('https://restcountries.com/v3.1/all')
  .then((response) => {
    const countries = response.data
    for (let i = 0; i < 10 && i < countries.length; i++) {
      console.log(countries[i])
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error)
  })




  return (
    <div className='App'>
    </div>
  )
}

export default App
