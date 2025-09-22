import React from 'react'
 import logo from "../../src/assets/icons/logo.svg"
 import facebook from "../../src/assets/icons/facebook.svg"
 import instgram from "../../src/assets/icons/instgram.svg"
 import youtub from "../../src/assets/icons/youtub.svg"
 import pinterest from "../../src/assets/icons/pin.svg"

 
const Footer = () => {
  return (
    <div className='pt-20'>
    <div className='bg-greenbg h-80'>
      <div className=" flex justify-around pt-14">
        <div>
        <div className='flex items-center p-2'> 
       <div>
            <img src={logo} width={80} height={80} />
          </div>
          <div className='pt-3 text-[24px] text-primary font-medium font-mono'>Garden</div>
        </div>
        <div>
            <p className='pt-3 text-[18px] text-primary font-medium'>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Dignissimos  </p>
        </div>
        <div >
            <ul className='flex gap-3 pt-5'>
                <li><img src={facebook} /></li>
                <li><img src={youtub} /></li>
                <li><img src={instgram} /></li>
                <li><img src={pinterest} /></li>
              
            </ul>
        </div>
        </div>
        
        <div>
            <h3 className='text-[24px] text-primary font-bold font-serif'>Services</h3>
            <ul className='pt-3 text-[18px] text-primary font-medium'>
                <li>Web Hosting </li>
                <li>Domaina</li>
                <li>Premium Hosting</li>
                <li>Private Server</li>
                <li>E-mail Hosting</li>
            </ul>
        </div>
        <div>
            <h3 className='text-[24px] text-primary font-bold font-serif'>Company </h3>
            <ul  className='pt-3 text-[18px] text-primary font-medium'>
                <li>About</li>
                <li>Blog</li>
                <li>Join Us</li>
                <li>Press</li>
                <li>Parters</li>
            </ul>
        </div>
        <div>
            <h3 className='text-[24px] text-primary font-bold font-serif'>Support</h3>
            <ul  className='pt-3 text-[18px] text-primary font-medium'>
                <li>Pricing Plan</li>
                <li>Documentation</li>
                <li>Guide</li>
                <li>Tutoril</li>
            </ul>
        </div>
      </div>
    </div>
    <div className=" bg-primary">
        <div className="p-5 text-white  text-xl text-center">
            <p className='font-sans font-[500]'>Design with love © TanahAirStudio 2020. All right reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
