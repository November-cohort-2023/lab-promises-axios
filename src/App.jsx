import './App.css'
import axios from  "axios"

function App() {
  //itineration 1

  axios.get('https://swapi.dev/api/people/4')
   .then((vader)=>{console.log(vader.data)
  return})
   .catch((error)=>{
    console.log(error)
   })

//itineration 2

   async function getCountries(){
    try{
      const france = await axios.get('https://restcountries.com/v3.1/name/france')

      console.log(france.data[0])

      return france
  
    }catch(err){
      console.log(err)
    }
  }
  console.log(getCountries()) 

  //itineration 3

  const numberOfCountries = 10;

  for (let i = 0; i < numberOfCountries; i++) {
    axios.get('https://restcountries.com/v3.1/all')
      .then((country) => {
        console.log(country.data[i]);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className='App'>
    </div>
  )
}

export default App
