
import React, { useEffect } from "react";
import axios from "axios";

const FetchFrance = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/france")
      .then((response) => {
        console.log(response.data[0].name.common); 
      })
      .catch((error) => {
        console.error("Error fetching France's data:", error);
      });
  }, []);

  
};

export default FetchFrance;
