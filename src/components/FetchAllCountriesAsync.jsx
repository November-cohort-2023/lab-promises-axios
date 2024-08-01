
import React, { useEffect } from "react";
import axios from "axios";

const FetchAllCountriesAsync = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response.data.slice(0, 10)); // Log the first 10 countries
      } catch (error) {
        console.error("Error fetching all countries' data:", error);
      }
    };

    fetchData();
  }, []);

 
};

export default FetchAllCountriesAsync;
