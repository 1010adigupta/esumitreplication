
import { data } from "autoprefixer";
 import React, { useState, useEffect } from "react";
 const axios = require("axios").default;
const API_URL = "https://api.esummit.in/events/all";
export default function getData() {
const [data, setData] = useState(null);
useEffect(() => {
  axios
    .get(API_URL)
    .then((response) => {
      const event_name = response.data;
      console.log(response.data);
      setData(event_name);
    })
    .catch((err) => console.log(err));
});
return data;
}

