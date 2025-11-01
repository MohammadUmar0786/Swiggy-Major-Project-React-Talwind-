<!--Header -->

  <!--DIV-1 -->
     <!-- Img --> <!--Div -->
  <!--DIV-2 -->
     <!--Image1 -->
     <!--Image2 -->
     <!--Div-1 -->
     <!-- Div-2 -->

  <!--DIV-3 -->

1. "container mx-auto" => Isse automatic margin aajati h x-axis pr aur centre mein bhi aajata h.
=> Isse "flexibility" badh jaati h aur jada responsive ho jata h.
=> Otherwise 2nd option tha manually margin do fhir, jo jada better approach nhi h.

2. Problem faced while using this "container mx-auto":-
  => On my screen middle mein nhi aarhi tha content but rohit bhaiya k waale mein aarha tha bcoz unke macbook ki size small thi compare to my laptop which is bigger, so "ChatGPT" helped me to solve this problem.
  => Just write => max-w-[1200px] in those both div's in header where we got issue, now all the problem will be fixed.

  => Reason:-

  🧩 What’s happening

When you use:

<div className="flex justify-between container mx-auto py-8">


Tailwind interprets this as:

.container {
  width: 100%;
  max-width: <depends on screen size>;
  margin-left: auto;
  margin-right: auto;
}

So container does not add any left/right spacing —
it just limits width based on breakpoints.

🧠 Key point: Breakpoints control container width

Tailwind’s container class changes max-width like this (default):

Screen size	Max width
sm (≥640px)	640px
md (≥768px)	768px
lg (≥1024px)	1024px
xl (≥1280px)	1280px
2xl (≥1536px)	1536px

If your laptop screen is ≥1536px wide (very common for 15–17" screens),
then the container expands to 1536px max width —
and since your screen might be just a bit bigger than that (like 1600–1920px),
the container looks almost full width.

→ That’s why your instructor (smaller screen) sees it centered
but you (larger screen) see it stretching edge-to-edge.

<!-- Interesting part -->
=> How to add those 2 attractive images like in swiggy:-
=> One image in attached at left corner and one at right corner.
=> We will use "Absoulte" position, isse inn images ka "normal flow" hat jaayega.
=> Firtly, will add those 2-images in starting of this main dive-2 of header jesa ki upar string mein humne mention kiya h structure.

=> Position "absolute" child ki hoti h parent k according, so phele parent ko "relative" banna hoga, means apne div ko.
=> Means, parent k according position set krenge yhe dono images apni.

=> Now we can use absoulte on images with top,let & right as 0.
 
----------> Header Part Completed <-------------

<!-- Now Main part started -->
=> Now if we check below content after header section on swiggy website there were different product lists & cards. Those product list, cards are dynamically created. The data for these is coming from API call fetch operations.

<!-- problem -->
=> But, problem is hum inspect mein network tab mein agar fetch waale tab pr click krke check krein toh wha koi data nhi show kr rha json format wala, but why ?? fhir kha se aarha hd data ?

<!-- Reason & Solution -->
=> If we check there on network tab, there is doc tab there if we click on that toh hume swiggy.com wgrh mein click krenge aur response tab mein check krenge toh wha html file hogi.
=> Yha apna html file k saath hi object ko bhej diya gya h, alag se fetch call krne ki need nhi h.
=> Means, yhe itni file h doc waali www.swiggy.com mein issi k response mein aaya hua h bhaut sara data agar check kroge aap to show krega.
=> Iss file ki size bhi bdi h baakiyon se around 160 kb.
=> Essa isliye hua h bcoz isne isko "render sever side" pr hi kr diya aur sidha ek html file bhej di h, sidha isko display krao.

=> Basically, isne Server side pr hi fetch wgrh kr diya, means apne system pr nhi ho rha fetch wgrh that's why network tab mein fetch waale pr click krke hume data show nhi ho rha.
=> Usne html file mein data dala aue apne system mein wo html file bhej di aur issi html file mein data loaded tha, yhi server-side rendering khelaata h.

=> Means alag se fetch operation krne ki need nhi h, ussi html doc mein data pda hua h.

<!-- Server-side rendering -->
=> Means, server side pr hi data load krke html doc mein data bhej do, issi ko "Server Side Rendering" khete h.

=> Ek to way ki 3n0 file html, css, js ek ke krke aaye fetch hoke.
=> Dusra way h yhe fetch wala jo kaam h mtlb loading wala wo server pr hi ho jaaye,
aur 3no file ek html,css, js ek final html doc file mein fil jaaye hume taaki wo fetch wgrh apne syetm pr na ho aur apne system pr load na pde, isse hume baar baar call na krna pda
=> So, isse kaam hota h internally aur issi ko "Server-side rendering" khete h. 
=> Aajkal "Next-Js " yhi kr rha h, "Next-JS" pdhenge to aur clearity mil jaayegi iss topic pr.

<!-- Yhe file toh mil gyi jha data h but itne bdi file mein data kese milega:- --> 
=> "Ctr + F" krke search chal kr lo data.
=> Jese let suppose "Pizza" serach kra toh uska data show hone lagega.
=> Hume data as object mil jaayega iss product ka, but wha image link ki jgh id di hui h
=> Ab agar image chaiye toh wo jo 3 humne images daali h last mein header setcion mein uska jo url h wo same aap copy kr lo "uplaod/" tk aur uske baad yhe "image_id" paste kr do uss url mein browser pr toh aapko image miil jaayegi product ki.

=> Ab apna saara data jo h phela jo bna hua h section header k baad jha alag alag items ki images h with there link wo apne ko milega:-

 => "imageGridCards" waale object mein milega iss pore data h, yhi se apna main data start h.
 => Ab iss "imageGridCards" se data copy krke ek "Utiles" waala folder bnake usme ek "FoodData.js" file mein yhe paste kr denge data.
 => Ab thoda sa data shi kr lenge, "info" wala hata denge aur iss "imageGridCards" as array me convert kr denge, like:- const imageGridCards = [.....].
 => Ab iss array mein pda hoga apna saara data aur isko "export" kra lenge taaki use kr skhe kisi component mein.

<!--Order our best food options Creation -->
 <!-- STEPS -->
 1. Let make one component to display those "Order our best food options" like in swiggy,
 named as "FoodOptions.jsx"
 2. Export this "FoodOptions" and Import & call it in "App.jsx" parent component
 3. Import that "imageGridCards" array which is in "FoodData.js" in this "FoodOptions" to use that data to display content on browser.
 4. Will make cards in different component as "FoodCard".
   => Here we had used value from FoodOptions through .map in FoodOptions.js.
   => We had used value of that array as "foodData", so confuse mat hona yhe whi value h map waali aur kuch nhi h. Jo ki apne array se hume mil rhi h each item value aur issi ko hum apne card create krne m use kr rhe h.
   => Means whi same way mein jese already apne kr chuke h bhaut projects mein, yha yhe saare cards as array mein rhenge:- [Card1, Card2 + ....etc]
 4. Here in "FoodCard.js" we had used ? in image link:-

    =>  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId} ></img>

 => This "?" means agar yhe foodData aaya hoga apne pass iska data tbhi aage imageId check krein otherwise not, nhi toh error aajayega.
 => Isko apne already padha hua h jiske khete h "Optional-Chaining"
 => And this url is in 2 parts first one till "upload/" jo ki same rhega saari images k link ka path yha aur fhir apn ne wo array ka "imageID" ko concatinate kr diya isme jo apne ko FoodData.js se mil rha h.

 5. In "FoodCard.jsx":-
 
  export default function FoodCard({foodData}){
    return(
        <>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </>
    )

  => Here we used "w-40 h-50" size bcoz wo jo size h actuall usme thoda ratio bigad rha tha, thoda lamba lg rha tha isliye isko round-off krke poora de diya 40 & 50
  => And one more important thing "object-cover" property to zoom out images taaki proper khil kr bhaar aaye image ki size, dabe na image. We had already used this property earlier.  

  => One more important point: "gap" proprty "flex" used ho uss div pr hi lgti h.

  6. Image part done, but link nhi lgi h inn images pr, let's do this:-
   
   => Easy h yhe toh, bas img wale ko anchor tag mein daal denge aur hume pta h link apni pdi h uss array mein, so will write path of anchor tag as:-

    => <a href = {foodData?.action?.link}>

    => yha "foodData" se confuse mat hona, harr jgh jha bhi isko likha h bcoz map mein value hum jo la rhe h array se wo isme jha rhi h aur map ka kaam pta hi h hume nya array laake dega isliye yhe bol skte h yhe "foodData" ab apna array h isme same whi original array ki value pdi h isliye humne likha esse "foodData.action.link".

    => Aur "curly braces" kyu use kr rhe h wo to pta hi h hume, kyunki yhe js expression h aur jsx mein esse hi likhi jaati j js expression, yhi rule h.
    => Aur "?" ka pta hi h islye likhte h taaki exist na krein data ? k phle wala toh aage na badhe aur error na aaye koi.

<!-- Shop groceries on Instamart Creation -->

1. Same way mein iska data bhi apne pick kr lenge apne jha sara data pda hua h as object in "Swiggy-Raw-Data.js" file mein.
=> Ctr + F kro aur search kr lo issi heading name se "Shop groceries on Instamart".
=> Same jese phele upar wala data jis name waale object mein tha ussi name se yhe bhi h h jo ki h "imageGridCards".
=> Ab, whi same process copy & paste and make this as array so that we can do .map task on this array and display data as cards.
=> Iske data k liye alag se bna denge file utiles folder mein as "Grocery.js"
=> Naam bhi change kr hi lete h iss array ka to "GroceryGridCard"
=> Now, same way mein jese FoodOptions.js mein map ka use kiya taaki card mein wo array ka data use kr skhe aur card generate krne k liye alag se component bnaya tha same wese hi yha "GroceryOptions" & "GroceryCard" krke components bna create kr lenge.
2. Yha iss waale section mein apne wo scroll bar waali functionality add kr denge jese swiggy ki website mein bhi h. Foodoptions waale mein nhi kiya apn ne but groceryOptions waale mein kr lete h taati scroll waali functionality ki bhi pratice ho jaaye aur dono yha jo sections h thode alag alag bhi lge aur space kam khaaye.

=> So, we just need to add some css:-
=> In "GroceryCard.js":-

   <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5">
                { GroceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)}
   </div>

=> Yha "flex-wrap" use na krke apn ne "flex  -nowrap" use kiya sabse phele taaki ek ke niche ek card na aaye warna scroll wala kese banega.
=> Fhir "overflow-x-auto" se jo overflow ho rha tha means apni section ki width se bhaar jo jha rhe the products unko humne as scroll baar mein x asix mein daal diya taaki overflow jesa bhi na lge width k bhaar aur scroll bar jesi functionality add ho jaaye.
=> But isme abhi image product ki proper width mein nhi aarhi thi, toh iske liye apne krenge "flex-none" child component jo h "GroceryOptions" ka usme, jo ki h "GroceryCard" taaki proper card show kre with proper image size.   

3. Now will make "Discover best restaurants on Dineout" section where restaurtant cards are present.
=> Let search from any restaurant name in our data to find this section data, let search from "Pasta Street", aaj yhe h best restaurents m ho skta h kal na ho isliye fhir latest waale data set  dundhna padega, abhi to purnae waale m mil gya apno ko.
=> Ab iss useful data ko copy krke utiles mein "DineData.js" name se file bna kr paste kr denge aur clean kr denge jese abtk krte aarhe h.

4. Now will do same process which we have done 2 times for above 2 sections.
=> One component "DineOutOptions" & one "DineOutcard"

=> Write below code in "DineOutOptions":-

     return(
        <div className="mt-25">
            <h1 className="w-[77%] container mx-auto mb-7 text-2xl font-bold">Shop groceries on Instamart</h1>

            <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-8 hide-scrollbar">
                { GroceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)}
            </div>
        </div>
     )

=> Above only one thing we applied new is "hide that scroll bar" to make UI more better, same we had make changes in previous 2 sections also, means above waale 2 sections mein bhi scrollbar remove kr denge.
=> To apply this we had used "hide-scrllbar" jiska code humne apni CSS file mein kiya h bcoz yhe property talwind mein nhi h isliye humne isko externally likhi h fhir just isko use kr rhe h, yhe humne "Chat-GPT" ki help se smjha aur apply kiya.

=> Now in "DineOutCard" we had done alot of thigs to craete cards.
=> We had used our data to use them and show in our restaurents cards, here we had used many dive inside div.
=> We had done till OFFER, that's enoufh for these cards, like below:-

  export default function DineCard({dineData}){

    // Dynamic offer shows
    const offerHeader = dineData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header;
    return(
        <div className="max-w-sm flex-none rounded-xl shadow-md mb-10">
           <a target="_blank" href={dineData.cta.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineData?.info?.mediaFiles[0].url}></img>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <p className="absolute bottom-2 left-3 text-white text-xl font-bold">{dineData?.info?.name}</p>
                <p className="absolute bottom-2 right-3 text-white text-xl font-bold">{dineData?.info?.rating?.value}</p>
            </div>
           </a> 

           <div className="mt-2 text-gray-500 text-sm font-medium p-3">
            <div className="flex justify-between">
                <span>{dineData?.info?.cuisines[0]+ "-"+ dineData.info.cuisines[1]}</span>
                <span>{dineData?.info?.costForTwo}</span>
            </div>
            <div className="flex justify-between mt-1">
                <span>{dineData.info.locality+", "+ dineData.info.locationInfo.city.name}</span>
                <span>{dineData.info.locationInfo.distanceString}</span>
            </div>
           </div>
          
          // Dynamic offer: Taaki jisme offer nhi h wo poora blank show kre instead of green line:-

          {offerHeader && (
           <div className="flex justify-center bg-[#1BA672] text-white font-bold m-3 p-1 rounded-md">
            {offerHeader}
           </div>
           )}
        </div>
    )
}

=> Here, above main thing is "Dynamic Offer dispaly", means ek "Problem" face kri
humne jab "Offer waali info" ko use krke div bnaya.

<!--Probelm -->
=> Jab kisi restaurant mein offer nhi given tha toh huare div k background color jo ki green h offer k liye iski vjh se unn without offer waalo k liye ek green line background show kr rha tha bcoz offer data toh h nhi toh value to koi hogi nhi but
wo css jo lgyai h wo toh aarhi h, so iske liye humne "dynamic" approch follow ki jo hum phele bhi kr chuke h.

<!--Solution:- Dynamic approch -->
=> Code mein bas kuch changes kiye, like below:-
=> Sabse upar humne wo jo data ki help se offer dispaly kr rhe the usko ek variable mein daal diya as "offerHeader".
=> Ab just humne uss varible ko use kiya as:-
     
          {offerHeader && (
           <div className="flex justify-center bg-[#1BA672] text-white font-bold m-3 p-1 rounded-md">
            {offerHeader}
           </div>
           )}

=> Means, 2no conditon jo ki h ki agar "offerHaeder" ka data exist krta h uss restaurant card k liye toh hi aage ki talwind css apply ho unn cards mein other wise as it is jesa tha phele wesa hi rhe.
=> Isliye umne above sbse phele likha {offerHeader} aur uske baad "AND && Operator" ka use kiya aur fhir CSS likhi taaki agar data aaya h toh hi yhe CSS apply ho otherwise not.
=> So, bas yhi main isme new thing sikhi aur apply ki.       

=> So, abhi k liye itna bhuat h yhe first home page, baaki niche aur content h wo baad me bnate rhenge otherwise issi page pr hi rhe jaaynge bhaut time k liye.


<!-- Abhi tk humne "API" ka use nhi kiya, means detch operations wgrh ka use hi nhi kiya. Just data copy paste krke ussi ko use kiya -->

=> So, let's check any that first "food-delivery" one which is in header part, means that first image jo header k last mein 3 image aarhi h bdi se jisme link bhi attched h.
=> Ab iss new page k andar jo hum gye h iska check krta h data kese aarha h, whi render-side se yha whi network tab mein fetch operation se.
=> Jese hi check kiya network tab mein fetch waale pr click krke wha hume third file jo as "v5?iat=28..." krke uss file ka naam hoga usme "respone" me sara data pda h.
=> Aur issi mein agar "header" mein check krein toh request url mein url hogi jisko request krke data mangaya jha rha h json format mein.
=> Ab iss "json" format data ko aur acche se format mein check krna h toh ek "extension" kr skte h attched chrome pr jo ki h "JSON Format". 

=> Now routing concept will use:-

<!-- Will use Routing -->
=> Now agar aap iss page pr check kroge toh alag alag brand k items h like, "Pizza hurt", "Burger king" and etc.
=> Ab agar aap inme se kisi pr bhi click kroge tb sabka same format mein ek page open hoga jha mainly items add waali functionality hogi.
=> So, humara yha "main point" yhe h ki sab inn different brands k anadar jo pages h yhe add item waale wo alag alag baar baar baanne ki need nhi h.
=> Means, sabka same hi UI h toh kyu sab bnaye apne separatly jo ki possible bhi nhi h krna bhuat time jaayega.
=> Agar hum path check krein url ka toh sabme inital path same h aage thoda id wgrh mentioned h.
=> Means, thery are following 'Routing' concept.
=> So, yha hum "Routing" ki help se kaam easy kr skte h apna.

<!--So, basically AIM is:-->
=> Only 1 component design krna h yhe add item wala page aur yhi same design baaki saare pages k liye bhi same rhega.
=> Ab bas alag alag data hi toh show krna h iss apne component mein.
=> Means, bhaut saare same UI waale component page banane ki bjaye ek bna denge aur sabka data iss pr baari baari show ho jaayega as per url path with help of routing.

<!-- Now Main Problem:- mein is "Data milega kese inn sabka jo ki h pizza hurt, subway, burger king and etc -->
=> One by one toh data manually nikalenge nhi network tab me jaake, jo ki bhaut hatic kaam h.
=> Means, sabke liye fetch operations nhi krenge manually.
=> Means, network tab jha jha kr sabka wo fetch call wala url link toh pick krne pr bhaut time jaayega, kr toh skte h but shi approch nhi h.

=> Let pick manually any 2 links from header in network tab:-

 Pizza hut:- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER


 Burger king:- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10208&catalog_qa=undefined&submitAction=ENTER

=> If, we check carefully to all above fetch url links jha data pada h, sabke me bas ek hi cheez ka difference h.
=> Jo ki h "Restaurant-Id", baaki poori link same h.

1. Pizza hurt:- restaurantId=16866
2. Burger king:- restaurantId=10208

=> So, hume just "RestaurenId" agar mil jaaye toh apna kaam ho jaayega.

<!-- Now, Question ise:- Yhe "RestaurenId" kha se milegi ?? -->
=> Jab hum "Food Delivery" waale pr click kr rhe the tb jo page apne ko oepn ho rha tha jha "restaurant" ki details h ussi "fetch" waale mein jo json data h ussi mein yhe "id" bhi hogi, so yha se "RestaurenId" ko use kr lenge.

<!--Let made that restaurants cards page -->
=> Means, "Food Delivery" pr click krne pr jo page aarha h wo,
aur isme bhi main content restaurents cards aur filter wgrh phele bna lete h fhir header bnaynge baad m jo ki simple h.

<!-- Steps -->
1. Copy that fetch url first
2. Now make a component let name as "RestaurentCard.jsx"
3. Now "useEffect()", to write fetch operation in Async fn.
4. Also make state usinf useState to display data and make changes in UI, initial as empty object le lenge.

But, agar apne check krein ab ki fetch se data aaya h ki nhi console pr toh hume ek error show hoga.

<!-- Probelem -->
=> Jab fetch kr rhe h aur console pr check kr rhe h ki data aaya h yha nhi tb error aarha h ki "Access.... has been blocked by "CORS" policy"

=> Means data fetch krne nhi de rhw swiggy waale.

=> Let understand this "CORS - Policy":-

<!--CORS-Policy -->

=> Normally kya hota h, apne browser pr swiggy ki website se swiggy k server se data manga rhe h fetch se toh data mil rha h, yhe by-default rheta h sabme same process.

=> But yha apne kya kr rhe h, hum "swiggy-clone" mens frontend apne system pr bna rhe h aur fetch operation se "swiggy" ke "server" se data la rhe h, so data to laake de dega yhe server, but jo apne system ka browser h yhe dekhega ki inn dono ka "Origin" alag h, means swiggy ka server aur apna frontend h, normally upar waale way mein swiggy ka hi server aur ussi k website me data aarha tha isliye wha allowed ho gya.

=> Aur jab origin alag-alag hota h tb "by-default" wo uss "request" ko fill nhi krne deta, means apna browser mna kr deta h.
=> Wha pr ek "header component" hota h jha "permissions" rheti h saari ki allow krna h yha nhi.

<!-- General Doubt -->
=> Hum jab "weather", "github" yhe sab project mein fetch wala kaam kr rhe the tb to dikkat nhi aarhi thi, why ??

=> Bcoz wha jab response krte h wo server wha pr "header" section mein permission mein allowed krta h, aur "browser" samjh jata h ki agar "Cross-Origin"  means alag-lag origin h toh bhi mein yha data load hone dun.

<!-- Solution -->
=> Will use a "Third party server".
=> Will call this third party server, jo mujhe swiggy k server se
data laake aur usko modified bhi krke dega.
=> Modified mtlb whi "Cross-origin" allowed krke dega.
=> Ab apna browser block nhi krega iss data ko bcoz jo server apne ko laake de rha h data uske header m present hoga cross-origin is allowed.

=> Means, humne "Intermediate" server use kr liya bich mein jo swiggy k server se data leke uss header seaction ko change krke as a response bhej dega apne ko.
=> Ab yhe kaam apna ek website krke degi, means wo server:-

<!-- Will use below proxy server to do above task -->
=> Proxy server website Url = "https://cors-anywhere.herokuapp.com/"

=> Hume request iss server pr maarni h, in below way:-

5. To uss that proxy server with our fetch api call:-

  => const proxyServer = "https://cors-anywhere.herokuapp.com/";
  => const swiggyAPI = "....." => yha whi apna API call rhega.

  const response  = await fetch(proxyServer+swiggyAPI);

  => Fhir baaki whi same joh ikha hua tha code whi rhega.

=> Means, phele jis server pr jaane chaate h uska url aur fhir swiggy waali API url.
=> Isse automatically handle ho jaayega apna ji problem thi wo.

=> Now, if we check. Humara error gayab ho chuka hoga jo aarha tha console pr aur apna data as object mil jaayega.

<!-- Now, data toh aagya but abhi isko display bhi krna h -->
=> If, we check this json format data in broswer hume poora data ki need nhi h.
=> Bas whi "restuarants"[{...cards}] array jisme cards as object pda h issi ki need h bcoz issi me mere kaam ka data h jo use krke display krna h.

6. Sabse phele to wo useState mein jo object use kiya tha empty usko hata kr array bna denge as iss "restaurants" array mein pda h data apna.
7. Then "setRestData()" jab call kr rhe h jo ki use state ka fn h isme apne data ka path bta denge jo as array mein h, like below:-

  => setRestData(data.data.card[1].card.card.gridElements.infoWithStyle.restaurants);

=> So, itne andar apna main data pda h isliye dot dot.. krke andar ke andar apn jate gye h upar.

=> Now, hume access mil jaayega apn iss "restuarants" array ka jisme data pda h.

<!-- Problem faced -->
=> Jab bhaiya ne yhe proxy server website use ki thi tb tk yhe public use allow krti thi but now "cors-anywhere.herokuapp.com no longer allows open public use".

=> It now requires manual activation or a custom self-hosted setup:-

  ✅ Solution Temporary:-

  🧩 Step-by-Step Fix
1️⃣ Visit this URL in your browser:

👉 https://cors-anywhere.herokuapp.com/corsdemo

2️⃣ Click the button

You’ll see:

“Request temporary access to the demo server.”

Click that button — it grants you access for a few minutes/hours from your IP. (Temporary basis allowss)

3️⃣ Reload your React app

Once done, your same code will start working perfectly:

=> There is a permanent solution also, but fow now let go with this temporary solution.
=> If this temp. solution not satisfy then can go with below permanent solution:-


=>🚀 Permanent Solution: Host Your Own CORS Proxy

You’ll create your own private version of cors-anywhere —
so it always works for your Swiggy API project.

🧩 Step 1: Create a free account on Render

Go to 👉 https://render.com

Sign up (you can use GitHub or Google)

It’s 100% free for small usage

⚙️ Step 2: Fork the official CORS Anywhere repository

Go to GitHub and open:
👉 https://github.com/Rob--W/cors-anywhere

Click “Fork” (top right) — this creates a copy under your GitHub account.

⚙️ Step 3: Deploy it on Render

Go to your Render Dashboard → click “New +” → “Web Service”

Choose “Build from a Git repository”

Connect your GitHub → Select your forked cors-anywhere repo

Render will ask for some settings:

Name: cors-anywhere-yourname

Region: Closest to India

Branch: main

Build Command:

npm install

Start Command:

node server.js

Environment: Node

Click Create Web Service

🕐 Step 4: Wait for it to deploy

After a few minutes, you’ll get a live URL like:

https://cors-anywhere-yourname.onrender.com/


✅ That’s your own permanent proxy!

⚡ Step 5: Use it in your React code

Now replace this line:

const proxyServer = "https://cors-anywhere.herokuapp.com/";


with your own hosted proxy:

const proxyServer = "https://cors-anywhere-yourname.onrender.com/";


The rest of your code stays exactly the same 💪
Now no /corsdemo clicks needed ever again.

💡 Optional — Make it more secure (recommended)

If you want only your website to use it:

Open your forked repo → edit server.js

Find this part:

// Set up rate-limiting or origin restrictions here if needed

Add:

const corsAnywhere = require('./lib/cors-anywhere');
const hostWhitelist = ['yourdomain.netlify.app', 'localhost:5173']; // add your dev + deployed site

Deploy again.

✅ Benefits

Permanent and reliable

Uses your same code (no code rewrite)

Free and fast (Render’s free tier is enough)

Full control (you can monitor or limit requests)
  
<!-- Now to create that restaurants cards -->
=> Fhilal k liye ek baar image show kra kr check kr lete h restaurants ki normally whi apne method se jese baaki cards mein kra h apn ne.
=> Map ka use krke aur ek dusre RestCard component mein card generate kr lenge.

=> But here hume ussi apne home page pr hi yhe resturants card show hone but hum chaate h "Delivery Options" pr click krein tb yhe "Restaurent" wala component show ho jha saare cards rhenge resturants k.

=> So, iske liye apne use krenge "Routing" ka concept, taaki mein jese hi click krun "Delivery Options" waale pr tb routing se hum "Restaurents" waale page pr chale jaaye.

=> Let's do this in next lecture.