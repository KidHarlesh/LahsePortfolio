import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import HeroSection from '../components/HeroSection'



const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#000428] to-[#040762] lg-h-screen">
      <div className=" ">
        <MobileNavbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default Home