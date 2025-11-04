<!-- Let's do Routing now in that DineOptions inside -->

1. npm install react-router
2. import {BrowserRouter, Routes, Route} from "react-router";
3. Now let put all those 4 home page components in a Home.js component which are " Header","FoodOptions","GroceryOptions",
"DineOutOptions", so that we can do "Routing" smoothly.

4. Now just write below code which we had learned already to apply routing:-

   function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route> 
        <Route path="/restaurant" element = {<RestaurantsOptions></RestaurantsOptions>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

=> Ab Jese npn run dev krenge toh sabse phele home page show krega.
=> Aur phir /restaurant krne pr "RestaurantsOptions" wala component show krega.

5. Now hum chaate h ki jese hi "DeliveryOptions" waale pr click krein toh yhe apna Routing chale aur ""RestaurantsOptions" wala page show ho.

=> So, now we need to use "Link", which we had already studied:-

=> Our this "DeliveryOptions" is in "Header" component, so will import "Link" here and use it in place of anchor tag a, like below:-

    => import { Link } from "react-router";

    => <Link to="/restaurant">
               <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
     </Link>

=> Hence, now our "Routing" is working fine.    

<!-- Now let make UI more better for this new page where all restaurants are present -->

=> Firstly we had made 3 sections in this page also:-

=> We had started from last section "Restaurants with online food delivery in Delhi" where all restaurants cards are there, which we had designed using 2 components "AllRestaurantsOptions.jsx"
and "AllRestaurantsCards.jsx" same way used map in one component and made card in one component which had done in our home page too.

# Section 3rd:- "Restaurants with online food delivery in Delhi" (AllRestaurantsOptions & AllRestaurantsCards):-

1. Here we had tried to make UI better.
2. We had used "Flex flex-wrap" to make card in proper arrangement with responsiveness.
3. We had applied here card border shadow to feel it like proper card
4. One more important thing we had done smooth transformation and transition property to make card more attractive and cool:- transform duration-200 hover:scale-95

# Section 2nd:- "Top restaurant chains in Delhi" (Restaurants & RestaurantCards component):-

1. Here we had shown top restaurants in delhi using same concept of " hide Scrollbar" and "overflow"
using => "overflow-x-auto hide-scrollbar";
2. But, here we had not make it look like card same as 3rd section as kuch to alag hona chaiye aur yha iss section mein need bhi nhi h, so bas image ko round kr diya acche se same jese real-swiggy website m h.

# Section 1st:- "What's on your mind?":- (FoodOptions2 & FoodOptions2Card component)
1. Just used data to make it same like or home page "Food-options" scrollbar, used same those properties
which are "overflow-x-auto hide-scrollbar".

<!-- Now, Let make "Shimmer-Effect" -->
=> "Shimmer-Effect" means "loading" type ka koi ek UI jisse apna page blank na show ho jab data aane mein kuch time lge apne page pr due to any issue.
=> Issi user-experince ko kharab hone se bachata h apna "Shimmer-Effect" 

=> Phele k zamane mein "spinner" hota tha jo ghumta rheta tha.

=> Yhe sab bas logo ko bevkuf banana ka way h taaki unko lge data aarha h wait krna h.
