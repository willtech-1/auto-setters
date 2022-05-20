import React from 'react';
import HeroImage from "../components/HeroImage";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import CarContainer from "../components/CarContainer"

const Cars = () => {
  return (
    <>
    <HeroImage hero="carsHero">
      <Banner title='our cars'>
        <Link to='/' className='btn-primary'>return home</Link>
      </Banner>
    </HeroImage>
    <CarContainer />
    </>
  )
}

export default Cars