import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between max-w-[1400px] mx-auto h-[14vh] items-center px-10">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className="flex items-center gap-x-15">
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
            <div className="flex p-1 border-2 border-orange-500 rounded-full">
                <input type="text" name="text" id="text" placeholder="Search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><IoSearch/></button>
            </div>
            <a href="#" className="text-2xl text-zinc-800"> <GoHeartFill/></a>
             <a href="#" className="text-2xl text-zinc-800"> <HiMiniShoppingBag/></a>
       
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
