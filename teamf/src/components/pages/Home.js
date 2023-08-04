import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Detail from './Detail';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Detail />
      <Footer />
    </>
  );
}

export default Home;