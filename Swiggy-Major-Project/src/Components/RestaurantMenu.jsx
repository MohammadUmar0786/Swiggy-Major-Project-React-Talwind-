import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://swiggy-proxy-1ib4.onrender.com/proxy?url=";
        const swiggyAPI = encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );

        const finalURL = proxyServer + swiggyAPI;
        console.log("Fetching URL:", finalURL);

        const res = await fetch(finalURL);

        // ✅ Log raw response for debugging
        const text = await res.text();
        console.log("🔍 Raw Response:", text.slice(0, 300)); // only show first 300 chars

        if (!text) {
          console.error("❌ Empty response from server");
          return;
        }

        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.error("❌ Response is not valid JSON:", e.message);
          return;
        }

        const tempData =
          data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        if (!tempData) {
          console.warn("⚠️ No menu data found in response.");
          return;
        }

        const filterData = tempData.filter(
          (item) => "title" in item?.card?.card
        );

        setRestData(filterData);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    }

    fetchData();
  }, [id]);

  console.log("🍽 Restaurant Data:", RestData);

  return (
    <>
      <h1>Hello Coder Army</h1>
    </>
  );
}
