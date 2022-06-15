/*import { useEffect, useState } from "react";
import axios from "axios";
function DataFetching(){
    const[images,SetImages] = useState ([])
    const[iD,SetId] = useState([])

    useEffect(() =>  {
        axios
        .get('https://api.esummit.in/events/all')
        .then(res => {
            console.log(res.data.CompetitiveEvents)
            SetImages(res.data.CompetitiveEvents)
        })
        .catch(err =>{
            console.log(err)
        })
        },[])
    }

    export default DataFetching();*/

