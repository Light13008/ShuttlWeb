import React from 'react';
import { IoBusOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="fixed w-full sm:flex justify-between  p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg  sm:flex items-center">
      <div className="flex items-center space-x-2 text-lg font-semibold text-white">
        {/* <img src='/yellow-shuttle-logos-02.svg' alt="YellowShuttl Logo" className="h-10 w-10 nav_bar_icon_wrapper relative" /> */}
        <a href='/' className="flex items-center space-x-1">
        <img src='/yellow-shuttle-logos-02.svg' alt="YellowShuttl Logo" className="h-10 w-10 nav_bar_icon_wrapper relative" />
          <span className='text-black text4x1 relative '>YellowShuttl</span>
          <IoBusOutline className="text-black" />
        </a>
      </div>
      <div className="flex space-x-8">
        <a href="/" className="text-white relative hover:text-yellow-400 transition duration-300">Home</a>
        <a href="/clients" className="text-white  relative hover:text-yellow-400 transition duration-300">Clients</a>
        <a href="/about-us" className="text-white relative hover:text-yellow-400 transition duration-300">About Us</a>
      </div>
    </nav>
  )
}

export default Navbar;
