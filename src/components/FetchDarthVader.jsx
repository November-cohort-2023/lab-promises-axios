
import React, { useEffect } from "react";
import axios from "axios";

const FetchDarthVader = () => {
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/4")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Darth Vader's data:", error);
      });
  }, []);

 
};

export default FetchDarthVader;
