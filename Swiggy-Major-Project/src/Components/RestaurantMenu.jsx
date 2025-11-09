import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu(){

    const {id}  = useParams(); 
    //console.log (id)

    const [RestData, setRestData] = useState([])
    
        useEffect(()=>{
        
            // Fetch operation
            async function fetchData(){
                
            
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                
                console.log(swiggyAPI);
                
                const response = await fetch(proxyServer+swiggyAPI);
                const data = await response.json();
                
                // Data find:
                const tempData =   data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                
                // Filter above found Data as per some condition:
                const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
                setRestData(filterData)
            }
    
            fetchData();
    
            },[])

            console.log(RestData);

            return(
                <>
                <h1>Hello Coder Army</h1>
                </>
            )
}