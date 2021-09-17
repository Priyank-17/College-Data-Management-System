import React from 'react';
import '../App.css'
import HeroSection from '../component/Herosection'
import Cards from '../component/Cards'
import Feature from '../component/Features'
import Achivement from '../component/Achivement'
import Footer from '../component/Footer'
import Nav from '../component/Navbar'

function Home() {
  return (
    
    <>
      <Nav/>
      <hr/>
      <HeroSection
        ani='animationContainer'
        label='College Data Management System'
        text="This website is made to help you out while learning new
        languages. There are so many features through which it make it
        easy to learn as it has each and every thing you required while
        stuyding"
      />
      <Cards/>
      {/* <Achivement/> */}
      <Feature/>
      <Footer/>
    </>
  );
}

export default Home;