import React, { useState } from "react";
import PlantCard from "../PlantCard";
import CustomHeading from "../CustomHeading";
import img from '../../assets/images/hero.png'

// from pritam branch 

const PopularPlants = () => {
  const plantList = [
    {
      image:img,
      title:"A",
      price:13
    },
    {
      image:img,
      title:"B",
      price:34
    },
    {
      image:"",
      title:"C",
      price:34
    },
    {
      image:"",
      title:"D",
      price:34
    },
  ]
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <CustomHeading title={"Popular Plants"} />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 ">

          {
            plantList.map((value)=>{
              return <>
              <PlantCard title={value.title} price={value.price} image={value.image}  />
              </>
            })
          }
          
         
        </div>
      </div>
    </div>
  );
};

export default PopularPlants;
