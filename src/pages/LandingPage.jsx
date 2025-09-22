import React from "react";
import hero from "../assets/images/hero.png";
import Button from "../components/CustomButton";
import CustomButton from "../components/CustomButton";
const Home = () => {
  return (
    <div className="bg-greenbg pb-16 flex    pt-20">
        <div className=" flex justify-between container mx-auto">
            
      <div className="flex flex-col gap-3">
        <h1 className="text-8xl text-primary  font-bold ">
          Give Life To
          <br />
          Your Home
        </h1>
        <p className="text-xl pt-7">
          Lorem ipsun hiusaeryuw gbusyduywae <br />
          uysadoi iuhuadcd hiuasdc
        </p>


        <CustomButton  title="Shop Now"/>
      
      </div>

      <div className="">
        <img width={314} height={393} src={hero} />
      </div>
        </div>
    </div>
  );
};

export default Home;
