import { useState, useEffect } from "react";
import AllRestaurantsCards from "./AllRestaurantsCards";
import Shimmer from "./Shimmer";

export default function AllRestaurantsOptions(){

        const [RestData, setRestData] = useState([])

        useEffect(()=>{
    
        async function fetchData(){

            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

            const response = await  fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        fetchData();

        },[])

        // Shimmer Effect

        if(RestData.length == 0)
            return <Shimmer/>


        return(

            <div className="w-[80%] container mx-auto mt-25 mb-10 ">

            <h2 className="text-2xl font-bold mb-5">Restaurants with online food delivery in Delhi</h2>

            <div className="flex flex-wrap gap-8">
            {RestData.map((restInfo)=> <AllRestaurantsCards restInfo={restInfo} key={restInfo?.info?.id}></AllRestaurantsCards>)}
            </div>
            </div>
    )

}