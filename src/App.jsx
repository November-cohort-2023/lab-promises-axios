import './App.css'
import axios from 'axios'

function App() {
  axios.get('https://swapi.dev/api/people/4')
  .then((res)=> {
    console.log(res.data)
    return axios.get('https://restcountries.com/v3.1/name/france')
  })
  .then((res)=> {
    console.log(res, 'res from france')
    console.log(res.data[0].name.common, 'is the name of france')

  })

  
}

export default App
