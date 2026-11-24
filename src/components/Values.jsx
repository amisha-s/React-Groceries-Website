import React from "react";
import Heading from "./Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../assets/basket-full-vegetables.png";

const Values = () => {
  const leftContainer = values
    .filter((item) => [1, 2].includes(item.id))
    .map((item) => {
      return (
        <div className="flex md:flex-row-reverse items-center gap-7">
          <div >
            <span className=" flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full p-2">
              {item.icon}
            </span>
          </div>
          <div className="md:text-right text-left">
            <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </div>
      );
    });
  const rightContainer = values
    .filter((item) => [3, 4].includes(item.id))
    .map((item) => {
      return (
        <div className="flex items-center gap-7  ">
          <div>
            <span className=" flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
              {item.icon}
            </span>
          </div>
          <div >
            <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </div>
      );
    });
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Our" content="Values" />
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col justify-between">{leftContainer}</div>
        <div className="md:flex w-1/2 hidden">
          <img src={Basket}></img>
        </div>
        <div className="flex flex-col justify-between">{rightContainer}</div>
      </div>
    </div>
  );
};

export default Values;

const values = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
