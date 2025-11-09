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

=> We had done Shimmer effect also.

=> Now need to design that "Menu-page" which shows when we click on any restaurant.
=> So, no need to design each and every Menu page, just need to make one component.
=> And with the help of that "Restaurant-ID", we can display Menu data to respective restaurant.

<!-- STEPS for Menu pages-->
1. Let do routing first by giving path to our Route, In same way which we had done for restaurant page.

=> <Route path="/city/delhi/:id"> </Route>

=> Here, above we had given id as => :id  bcoz it will be different for different restaurants and city will be same which is delhi.
=> Yhe apna dynamically hoga.
=> This ":id" is knows as "Params" which we had studied already.

=> Ab issko kha leke jana h, means kha divert krna h. Iske liye apne denge "element" ki value
=> Isko ek Menu "component" mein divert kr denge.
=> So, will write:-

=> <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}> </Route>

=> In "RestaurantMenu" component:-

1. Firstly, will use "useParams" to pass that restaurant id dynamically.

  => import {useParams} from "react-router";
     let id = useParams();
     console.log(id) => To check that dynamically id show ho rhi yha nhi.

  => Let return something taaki confirm ho jaye chal rha h yha nhi.

    => return(
         <h1>Hello Coder Army</h1>
    )   

  => Ab agar browser k url pr likhenge yhe above path "http://localhost:5173/city/delhi/12, 12 is id, can write any id, toh apna page show krega jispe "Hello Coder Army" likha hoga, means working fine.

  => Aur console pr check krenge toh object mein inki id apn ko mil jaayegi.  

2. Now, we can fetch data using this restaurant id with help use useEffect hook.
=> So, let copy and paste that useEffect fetch operation from our AllRestaurantsOptions component bcoz we had already done same thing there.
=> Now, just need to replace that "Swiggy-API", will use "Menu" page API url link which we will get from any "Menu" page.

3. Now, our task is jin jin restaurant card pr click krein toh unka wo menu show krein,
So, hume link bhi attach krna hoga inn restaurant cards pr.
=> Will use "Link" to do this.

 AllRestaurantsCard.jsx:-

 => Just wrap that complete card div into "Link", so firtly need to import "LINK" also:-

    => import {Link} from "react-router";

=> <Link to={"city/delhi"+restInfo.info.id}></Link>

=> Here, above humne path diya h to mein "city/delhi aur id apne ko milegi "restInfo.info.id" mein isliye esse likha h aur concatenate kr diya fhir.


# Important Point:-

<!--Problem -->
=> Jab hum restaurants card waale page pr jaate h toh apna data fetch hoke aata h thoda time leke jisse apna shimmer effect bhi show hota h, ab agar hum inn card pr click krenge toh menu waale page pr chale jaaynge aur agar
wapis se back aate h restaurants card pr toh data fhir se fetch hota h jisse shimmer effect bhi fhir se chalega.
=> Toh apna fhir se data toh fetch nhi hona chaiye jab ek baar ho chuka h.

<!-- Reason -->
=> Jab bhi routing hoti h tb by default poorana jo bhi data hota h usko hata deta h yhe, means jo bhi state h inki wo sab hata deta h.
=> Means, jo bhi poorane routing waale components honge aur unki jo bhi states hongi wo lost ho jaayegi.
=> Means, jese hi nye path pr jaaynge poorana path pr, means poorane page pr jo bhi data hoga wo lose ho jaayega aur fhir se fetch hoga.

<!-- Solution -->
=> "Redux-store" will help us to store these all information taaki lose na ho data jab path change kre apne toh
=> And also we can use "Local-storage" concept here to store these data, taaki ek baar fetch kr liya data toh wapis use kr skhe.

<!-- Let's Start to create Menu page -->

=> Sabse phele hume data access krna h ki kha h apna menu wala data
=> Toh agar check krein iss API k data ko toh wo start ho rha h :-

   data.data.cards[5] ke andar

=> Aur isme bhi aur andar jaana hoga thoda, so final path hoga:-

   data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;

=> Ab, ek important point aata h ki apne inn saare "cards" jo last path h apna upar isme saare cards k andar value nhi h apni jo chaiye.
=> Apne kaam ka data ussi card mein h jisme "titile" krke ek key-pair mein value present h.
=> Means, jsme "title" krke ek key-pair m value hogi whi card apne kaam ka h.
=> So, hume filter out bhi krna hoga data using "filter" from our this card array.
=> "Filter" hume apna data filter out krke de dega, means yha whi card select honge jha "title" present hoga.

=> So, will write:-

   const tempData = 
   data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

   const filterData = tempData.filter((item)=> 'title' in items?.card?.card);

   setRestData(filterData);

=> Let, understand this above "filter" line:-

=> Yha hum apne tempData array se jha sara card ka data h wha se "filter" use krke check kr rhe h ki "title" h yha nhi iss cards mein.

=> "items" mein saare card ka data hoga.
=> 'title' as key yha hum serach kr rhe h apne "items.card.card" mein, that's wy we had written 'titile (key) in items.card.card (value).
=> Means, in short => key in value search krke filter out kr rhe h.