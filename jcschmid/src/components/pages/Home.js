import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Autoplay from '../Autoplay';

function Home() {
  return (
    <>
      <Autoplay />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;