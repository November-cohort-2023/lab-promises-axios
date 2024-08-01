
import React, { useEffect } from "react";
import axios from "axios";





const FetchAllCountries = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data.slice(0, 10)); 
      })
      .catch((error) => {
        console.error("Error fetching all countries' data:", error);
      });
  }, []);

  
};




export default FetchAllCountries;
