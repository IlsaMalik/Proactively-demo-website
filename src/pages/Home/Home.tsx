import React from 'react';
import Hero from '../../components/Hero/Hero';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import SixPillars from '../../components/SixPillars/SixPillars';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <SixPillars />
    </>
  );
};

export default Home;