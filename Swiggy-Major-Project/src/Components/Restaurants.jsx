import { useState, useEffect } from "react";

export default function Restaurants(){

    // useState
    const [RestData, setRestData] = useState([]);


    // useEffect:- Fetch operation
    useEffect(()=>{
    
        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";  

            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
    fetchData();    
    },[])

     console.log(RestData); // to check got data or not

    //return(
    //    <>

    //    </>
    //)
}