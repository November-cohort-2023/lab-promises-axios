import './App.css'
import axios from 'axios'

function App() {
  axios.get('https://swapi.dev/api/people/4')
  .then((res)=> {
    console.log(res.data)
  })

  
}

export default App
