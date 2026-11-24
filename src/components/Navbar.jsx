import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  const toggle=()=>{
    setShowMenu(!showMenu);
  }
  return (
    <header>
      <nav className="flex justify-between max-w-[1400px] mx-auto h-[14vh] items-center px-10">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">Home</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
        </ul>
        <div className="flex items-center gap-x-5">
            <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                <input type="text" name="text" id="text" placeholder="Search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><IoSearch/></button>
            </div>
            <a href="#" className="text-2xl text-zinc-800"> <GoHeartFill/></a>
             <a href="#" className="text-2xl text-zinc-800"> <HiMiniShoppingBag/></a>
             <a href="#" className="text-zinc-800 text-2xl md:hidden" onClick={toggle} ><GiHamburgerMenu /></a>
       
        </div>

         <ul className={`flex flex-col gap-y-15 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10  items-center gap-x-15 md:hidden absolute top-50 -left-full transform -translate-x-1/2 ${showMenu ? 'left-1/2':""} `}>
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">Home</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
          <li>
             <div className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                <input type="text" name="text" id="text" placeholder="Search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><IoSearch/></button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
