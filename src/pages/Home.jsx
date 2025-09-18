import React from 'react'
import hero from '../assets/images/hero.png'
const Home = () => {
    return (
        <div className="bg-[#EDF8EA] flex  justify-around  pt-20">
            <div className=" ">
                <h1  className='text-5xl  font-bold '>Give Life To<br/>
                    Your Home
                </h1>
                <p className='text-xl pt-7'>
                    Lorem ipsun hiusaeryuw gbusyduywae  <br/>uysadoi  iuhuadcd hiuasdc
                </p>
                <div className=" pt-7">
                
                <button className='bg-green-700 text-white font-medium w-25 h-10 rounded-xl' >Shop Now</button>
                </div>

            </div>

            <div className="">
               <img  src={hero} />
            </div>
        </div>
    )
}

export default Home
