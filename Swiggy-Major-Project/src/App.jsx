import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
import FoodOptions from './Components/FoodOptions';
import GroceryOptions from './Components/GroceryOptions';
import DineOutOptions from './Components/DineoutOptions';
import Restaurants from './Components/Restaurants';

function App() {

  return (
    <>
      <Header/>
      <FoodOptions/>
      <GroceryOptions/>
      <DineOutOptions/>
      <Restaurants/>
    </>
  )
}

export default App
