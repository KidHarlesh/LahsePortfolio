import React from 'react'
import Logo from "../assets/lasheToolsBg.png";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-[#000428] to-[#020330] ">
      <div className='flex justify-center'>
        <img src={Logo} alt="logo" className="w-[44px] max-h-[92px]"/>
      </div>
      
    </section>
  );
}

export default Footer