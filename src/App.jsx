import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    function fetchStuff() {
      axios
        .get("https://swapi.dev/api/people/4")
        .then((result) => {
          console.log(result);
          setState((state) => ({ ...state, vader: "LOGGED ON CONSOLE!" }));
        })
        .catch((error) => {
          console.log(error);
          setState((state) => ({ ...state, vader: "<ERROR>" }));
          return null;
        });

      axios
        .get("https://restcountries.com/v3.1/name/france")
        .then((result) => {
          return result.data[0].name.common;
        })
        .then((franceName) => {
          console.log(franceName);
          setState((state) => ({ ...state, france: "LOGGED ON CONSOLE!" }));
        })
        .catch((error) => {
          console.log(error);
          setState((state) => ({ ...state, france: "<ERROR>" }));
          return null;
        });
    }

    fetchStuff();
  }, []);

  return (
    <div className="App">
      <h1>Fetch 1 Result: {state?.vader ? state.vader : "Fetching..."}</h1>
      <h1>Fetch 2 Result: {state?.france ? state.france : "Fetching...."}</h1>
    </div>
  );
}

export default App;
