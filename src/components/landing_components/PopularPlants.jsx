import React, { useState } from "react";
import PlantCard from "../PlantCard";
import CustomHeading from "../CustomHeading";
import img from '../../assets/images/hero.png'
 import plant1 from"../../assets/images/plant1.png"
 import plant2 from"../../assets/images/plant2.png"
 import plant3 from"../../assets/images/plant3.png"
 import plant4 from"../../assets/images/plant4.png"
 import plant5 from"../../assets/images/plant5.png"
 import plant6 from"../../assets/images/plant6.png"
 import plant7 from"../../assets/images/plant7.png"
// from pritam branch 

const PopularPlants = () => {
  const plantList = [
    {
      image:img,
      title:"Big Can More Set",
      price:350
    },
    {
      image:plant6,
      title:"Set More ",
      price:530
    },
    {
      image:plant4,
      title:"Green Plant",
      price:250
    },
    {
      image:plant3,
      title:"Bertie",
      price:300
    },
    {
      image:plant4,
      title:"Big Can More Sst ",
      price:560
    },

    {
      image:plant5,
      title:"Big Can More Set",
      price:700
    },

    {
      image:plant6,
      title:"Big Can More Set ",
      price:580
    },

    {
      image:img,
      title:"Big Can More Set",
      price:3070
    },
  ]
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <CustomHeading title={"Popular Plants"} />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 pt-10">

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
