import React from 'react'
import axios from "axios"
//import { getFontDefinitionFromManifest } from "next/dist/server/font-utils";

let object;
function useEffect(){
    async function getData(){
        const res = await axios.get('https://api.esummit.in/events/all');
        console.log(res);
        object = res
    }
    getData();   
};

export default useEffect;
useEffect(); 