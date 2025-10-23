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

