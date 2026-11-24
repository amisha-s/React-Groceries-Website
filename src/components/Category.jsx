import React from 'react'
import Heading from './Heading'
import FruitVeggies from "../assets/fruits-and-veggies.png"
import DairyEggs from "../assets/dairy-and-eggs.png";
import MeatSeaFood from "../assets/meat-and-seafood.png";
import Button from "../components/Button"

const Category = () => {
    const renderedContent=category.map((cards)=>{
        return(
            <div className='flex-1 basis-[300px]'>
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={cards.image} className='absolute bottom-0'></img>
                </div>
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{cards.title}</h3>
                    <p className='mt-3 mb-9 text-zinc-600'>{cards.description}</p>
                    <Button content="See All"/>
                </div>
            </div>
        )
    })
  return (
   <section>
    <div className='max-w-[1400px] mx-auto mx-10 my-20'>
        <Heading highlight="Shop" content="By Category"/>
        <div className='flex flex-wrap gap-10 mt-15'>
            {renderedContent}
        </div>
    </div>
    </section>
  )
}

export default Category

const category=[
    {
        id:1,
        title:"Fruits & Veggies",
        description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image:FruitVeggies
    },
    {
        id:2,
        title:"Dairy & Eggs",
        description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image:DairyEggs
    },
     {
        id:3,
        title:"Meat & SeaFood",
        description:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image:MeatSeaFood
    }
]
