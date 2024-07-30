import './App.css'
import axios from 'axios'


function App() {
/*
  axios.get("https://swapi.dev/api/people/4").then((people) => {
    console.log(people)
  })
  axios.get("https://restcountries.com/v3.1/name/france").then((country) => {
    console.log(country.data[0].name.common)
  })
  for (let i = 0; i < 10; i++) {
    axios.get("https://restcountries.com/v3.1/all").then((country) => {
      console.log(country.data[i].name.common)
    })

  }

*/

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

  async function get10Countrys(){
    for(let i=0; i<10; i++){
      const oneCountry = await axios.get('https://restcountries.com/v3.1/all')
      console.log(oneCountry.data[i].name.common)
    }
  }
  get10Countrys()


  return (
    <div className='App'>
    </div>
  )
}

export default App
