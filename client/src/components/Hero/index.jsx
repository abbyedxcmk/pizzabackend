import React from 'react';
import '../Hero/index.css';
import pizzaslices from "../../assets/Heroimage/pizza-hero-2.jpeg";
import logo from "../../assets/Logo/OP-1-removebg-preview.png";

function App() {
  return (
  
    <div className="w-screen h-screen text-white" style={{
      background: `url(${pizzaslices}) center/cover no-repeat`, // Set background image
    }} >
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full">
          <img src={logo}>
          </img>
          <div className="flex justify-center mx-auto">
            <button
              className="bg-danger text-white font-bold rounded-full  py-4 px-8">
              See Our Full Menu
            </button>
          </div>
        </div>
      </div>
    </div >
  );
 }
 
 export default App

